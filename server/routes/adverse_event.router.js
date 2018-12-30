const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

// router.post('/',rejectUnauthenticated, async (req, res) => {
//   // const toId = req.body.toId;
//   // const fromId = req.body.fromId;
//   // const amount = req.body.amount;
//   // console.log(`Transfer ${amount} from acct ${fromId} to acct ${toId}`);
//   const newAdverseEvent = req.body;
//   // const queryText = `INSERT INTO adverse_events 
//   // ("postop_id", "event_options_id", "clavien_score") 
//   //   SELECT * FROM UNNEST(($1)::int[],($2)::int[],($3)::int[])`;
//   const queryValues = [
//     newAdverseEvent.arrayPostOpIds,
//     newAdverseEvent.arrayEventOptionIds,
//     newAdverseEvent.arrayClavienScores,
//   ];
//   console.log('query values:', req.body, queryValues);
  
//   // We need to use the same connection for all queries...
//   const connection = await pool.connect()
    
//   // Using basic JavaScript try/catch/finally 
//   try {
//     await connection.query('BEGIN');
//     console.log('after begin query');
//     //remove all events for postop_id
//     const sqlText = `DELETE FROM adverse_events WHERE postop_id = $1`;
//     await connection.query( sqlText, [newAdverseEvent.postop_id]);
//     console.log('after delete query', queryValues);
//     //add all events for postop_id
//     sqlText = `INSERT INTO adverse_events 
//           ("postop_id", "event_options_id", "clavien_score") 
//             SELECT * FROM UNNEST(($1)::int[],($2)::int[],($3)::int[])`;
//     await connection.query( sqlText, queryValues);      
//     console.log('after insert query');
//     await connection.query('COMMIT');
//     res.sendStatus(200); 
//   } catch ( error ) {
//     await connection.query('ROLLBACK');
//     console.log(`Transaction Error - Rolling back adverse events`, error);
//     res.sendStatus(500); 
//   } finally {
//     // Always runs - both after successful try & after catch
//     // Put the client connection back in the pool
//     // This is super important! 
//     connection.release()
//   }
// });

//
// GET ROUTER TO RETRIEVE ADVERSE EVENTS FOR PATIENT ID
router.get('/:id', rejectUnauthenticated, (req, res) => {
//   console.log('query.id', req.query.id);

// select event_options.id, postop_id, clavian_score from event_options 
// left outer join (select * from events where postop_id = 1) as foo on event_options.id = foo.event_id
// order by event_options.id

//   const queryText = 'SELECT * FROM events WHERE postop_id=$1';
    const queryText = `SELECT event_options.name, event_options.sort as id, 
                        selected_events.checked, selected_events.postop_id, 
                        selected_events.clavien_score
                        FROM event_options
                        LEFT OUTER JOIN (
                            SELECT *, true as checked FROM adverse_events
                            WHERE postop_id = $1) AS selected_events
                        ON event_options.id = selected_events.event_options_id
                        ORDER BY event_options.sort`

    pool.query(queryText, [req.params.id])      
      .then(results => res.send(results.rows))
      .catch(error => {
          console.log('Error making SELECT for adverse events:', error);
          res.sendStatus(500);
      });
});


// POST ROUTER TO ADD UPDATE ADVERSE EVENTS
// this will remove any existing and update with new
router.post('/', rejectUnauthenticated, (req, res) => {
  const newAdverseEvent = req.body;
  const queryText = `INSERT INTO adverse_events 
  ("postop_id", "event_options_id", "clavien_score") 
    SELECT * FROM UNNEST(($1)::int[],($2)::int[],($3)::int[])`;
  const queryValues = [
    newAdverseEvent.arrayPostOpIds,
    newAdverseEvent.arrayEventOptionIds,
    newAdverseEvent.arrayClavienScores,
  ];
  // console.log('sql query for new items for new user', queryText, queryValues);
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing INSERT item query', err);
      res.sendStatus(500);
    });
});

// router.put('/', rejectUnauthenticated, (req, res) => {
//     const id = req.body.id
//     const icu_stays = req.body.icu_stays
//     const mcu_stays = req.body.mcu_stays;
//     const hospital_stays = req.body.hospital_stays;
//     const notes = req.body.notes;
//     const serious_advese_event = req.body.serious_advese_event;
//     const score = req.body.score;
//     const reoperation = req.body.reoperation;
//     const hospital_mortality = req.body.hospital_mortality;
//     const status_at_discharge = req.body.status_at_discharge;
//     const discharge_notes = req.body.discharge_notes;

//     const queryText = `UPDATE postop 
//         SET icu_stays=$2, mcu_stays=$3, hospital_stays=$4,
//         notes=$5, serious_advese_event=$6, score=$7,
//         reoperation=$8, hospital_mortality=$9,
//         status_at_discharge=$10, discharge_notes=$11
//         WHERE id=$1`;

//     pool.query(queryText, [id, icu_stays, mcu_stays, hospital_stays,
//         notes, serious_advese_event, score, reoperation, hospital_mortality,
//         status_at_discharge, discharge_notes])
//       .then((result) => { res.send(result.rows); })
//       .catch((err) => {
//         console.log('Error completing UPDATE post op query', err);
//         res.sendStatus(500);
//       });            
// });

// DELETE ROUTER FOR ITEM
router.delete('/', rejectUnauthenticated, (req, res) => {
  console.log('in delete on server', req.query);
  const queryText = 'DELETE FROM adverse_events WHERE postop_id=$1';
  pool.query(queryText, [req.query.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE adverse events query', err);
      res.sendStatus(500);
    });
});


module.exports = router;