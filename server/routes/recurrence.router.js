const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

// GET ROUTER TO RETRIEVE POST OP FOR PATIENT
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('query.id', req.query.id);
  const queryText = 'SELECT * FROM reoccurence WHERE followup_id=$1';
  pool.query(queryText, [req.params.id])      
      .then(results => res.send(results.rows[0]))
      .catch(error => {
          console.log('Error making SELECT for recurrence:', error);
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
    console.log('in put:', req.body);

    const id = req.body.id
    const date = req.body.date
    const cea = req.body.cea;
    const rec_modality = req.body.rec_modality;
    const syst_location = req.body.syst_location;
    const treatment = req.body.treatment;
    const date_treatment = req.body.date_treatment;
    const status = req.body.status;
    const notes = req.body.notes;
    const location = req.body.location;

    const queryText = `UPDATE reoccurence 
        SET date=$2, cea=$3, rec_modality=$4,
        syst_location=$5, treatment=$6, date_treatment=$7,
        status=$8, notes=$9, location=$10 WHERE id=$1`;

    pool.query(queryText, 
        [id, date, cea, rec_modality, syst_location, treatment,
        date_treatment, status, notes, location])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing UPDATE follow recurrence query', err);
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