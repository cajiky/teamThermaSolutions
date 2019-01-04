const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

// Post to update adverse_events .. first remove
// all entries for postop_id and then insert
// entries from those selected and with clavien scores
router.post('/',rejectUnauthenticated, async (req, res) => {
  const newAdverseEvent = req.body;
  const queryValues = [
    newAdverseEvent.arrayPostOpIds,
    newAdverseEvent.arrayEventOptionIds,
    newAdverseEvent.arrayClavienScores,
  ];
  console.log('query values:', req.body, queryValues);
  
  // We need to use the same connection for all queries...
  const connection = await pool.connect()
    
  // Using basic JavaScript try/catch/finally 
  try {
    await connection.query('BEGIN');
    console.log('after begin:', newAdverseEvent, queryValues);
    //remove all events for postop_id
    let sqlText = `DELETE FROM adverse_events WHERE postop_id = $1`;
    await connection.query( sqlText, [newAdverseEvent.postop_id]);
    console.log('after delete query', queryValues);
    //add all events for postop_id
    sqlText = `INSERT INTO adverse_events 
          ("postop_id", "event_options_id", "clavien_score") 
            SELECT * FROM UNNEST(($1)::int[],($2)::int[],($3)::int[])`;
    await connection.query( sqlText, queryValues);      
    console.log('after insert query');
    await connection.query('COMMIT');
    res.sendStatus(200); 
  } catch ( error ) {
    await connection.query('ROLLBACK');
    console.log(`Transaction Error - Rolling back adverse events`, error);
    res.sendStatus(500); 
  } finally {
    // Always runs - both after successful try & after catch
    // Put the client connection back in the pool
    // This is super important! 
    connection.release()
  }
});

//
// GET ROUTER TO RETRIEVE ADVERSE EVENTS FOR PATIENT ID
router.get('/:id', rejectUnauthenticated, (req, res) => {
  
  // get any adverse_events and all event_options
  const queryText = `SELECT event_options.name, event_options.id as id, 
                    selected_events.checked, selected_events.postop_id, 
                    selected_events.clavien_score
                    FROM event_options
                    LEFT OUTER JOIN (
                        SELECT adverse_events.*, true as checked FROM adverse_events
                        JOIN postop ON postop.id = adverse_events.postop_id
                        WHERE postop.patient_id = $1) AS selected_events
                    ON event_options.id = selected_events.event_options_id
                    ORDER BY event_options.sort`

    pool.query(queryText, [req.params.id])      
      .then(results => res.send(results.rows))
      .catch(error => {
          console.log('Error making SELECT for adverse events:', error);
          res.sendStatus(500);
      });
});

module.exports = router;