const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();


router.post('/', (req, res) => {
    console.log('notes put req.body', req.body);
    
    const userId = req.body.userId;
    const pathology_report = req.body.pathologyNotes;
    const title = req.body.title;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const queryText = `INSERT INTO pathology_op_notes ("pathology_report", "patient_id", "title", "first_name", "last_name"  ) VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [pathology_report, userId, title, firstName, lastName])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing UPDATE post op query', err);
        res.sendStatus(500);
      });            
});



router.get('/:id', (req, res) => {
  console.log('GET req.params.id', req.params.id);
  
  let reqId = req.params.id;
  const queryText = `SELECT * FROM pathology_op_notes WHERE patient_id=${reqId} ORDER BY date_completed DESC`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT user query', err);
      res.sendStatus(500);
    });
});



module.exports = router;