const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();


router.post('/', (req, res) => {
    console.log('notes put req.body', req.body);
    
    const userId = req.body.userId;
    const pathology_report = req.body.pathologyNotes;
    const queryText = `INSERT INTO pathology_op_notes ("pathology_report", "patient_id" ) VALUES ($1, $2)`;
    pool.query(queryText, [pathology_report, userId])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing UPDATE post op query', err);
        res.sendStatus(500);
      });            
});

router.post('/', (req, res) => {
  console.log('notes post req.body', req.body);
  
  const userId = req.body.userId;
  const operative_notes = req.body.operativeNotes;
  const queryText = `INSERT INTO operative_op_notes ("operative_notes", "patient_id" ) VALUES ($1, $2)`;
  pool.query(queryText, [operative_notes, userId])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing UPDATE post op query', err);
      res.sendStatus(500);
    });            
});



module.exports = router;