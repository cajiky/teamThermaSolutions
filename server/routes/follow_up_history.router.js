const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

// GET ROUTER TO RETRIEVE POST OP FOR PATIENT
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('query.id', req.query.id);
  const queryText = `SELECT * FROM follow_up_history 
                    WHERE follow_up_id=$1
                    ORDER BY id desc`;
  pool.query(queryText, [req.params.id])      
      .then(results => res.send(results.rows))
      .catch(error => {
          console.log('Error making SELECT for follow up history:', error);
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

    const id = req.body.id;
    // const follow_up_id = req.body.follow_up_id;
    const date = req.body.date;
    const evidence_of_disease = req.body.evidence_of_disease;
    const follow_up_notes = req.body.follow_up_notes;
    const cea = req.body.cea;
    const rec_modality = req.body.rec_modality;
    const syst_location = req.body.syst_location;
    const treatment = req.body.treatment;
    const date_treatment = req.body.date_treatment;
    const status = req.body.status;
    const treatment_notes = req.body.treatment_notes;
    const location = req.body.location;

    const queryText = `UPDATE follow_up_history 
        SET date=$2, evidence_of_disease=$3, follow_up_notes=$4,
        cea=$5, rec_modality=$6,
        syst_location=$7, treatment=$8, date_treatment=$9,
        status=$10, treatment_notes=$11, location=$12 WHERE id=$1`;

    pool.query(queryText, 
        [id, date, evidence_of_disease, follow_up_notes,
        cea, rec_modality, syst_location, treatment,
        date_treatment, status, treatment_notes, location])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing UPDATE follow up history query', err);
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