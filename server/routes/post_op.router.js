const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

// GET ROUTER TO RETRIEVE POST OP FOR PATIENT
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('query.id', req.query.id);
  const queryText = 'SELECT * FROM postop WHERE patient_id=$1';
  pool.query(queryText, [req.params.id])      
      .then(results => res.send(results.rows))
      .catch(error => {
          console.log('Error making SELECT for post op:', error);
          res.sendStatus(500);
      });
});

// POST ROUTER TO ADD NEW POST OP
// router.post('/', rejectUnauthenticated, (req, res) => {

//   const newItem = req.body;

//   const queryText = `INSERT INTO item 
//   ("category_id", "name", "brand_name", "person_id") 
//     VALUES ($1, $2, $3, $4)`;
//   const queryValues = [
//     newItem.category_id,
//     newItem.name,
//     newItem.brand_name,
//     req.user.id,
//   ];

//   // console.log('sql query for new items for new user', queryText);
//   pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(201); })
//     .catch((err) => {
//       console.log('Error completing INSERT item query', err);
//       res.sendStatus(500);
//     });
// });

router.put('/', rejectUnauthenticated, (req, res) => {
    const queryText = `UPDATE postop 
        SET icu_stays=$2, mcu_stays=$3, hospital_stays=$4,
        notes=$5, serious_advese_event=$6, score=%7,
        reoperation=$8, hospital_mortality=$9,
        status_at_discharge=$10, discharge_notes=$11
        WHERE id=$1`;
    pool.query(queryText, [req.body.id, req.body])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing UPDATE post op query', err);
        res.sendStatus(500);
      });            
});

// DELETE ROUTER FOR ITEM
// router.delete('/', rejectUnauthenticated, (req, res) => {
//   // console.log('in delete on server', req.query.id);
//   const queryText = 'DELETE FROM item WHERE id=$1';
//   pool.query(queryText, [req.query.id])
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing DELETE item query', err);
//       res.sendStatus(500);
//     });
// });


module.exports = router;