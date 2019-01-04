const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();


router.get('/:id', (req, res) => {
  console.log('GET req.params.id', req.params.id);
  
  let reqId = req.params.id;
  const queryText = `SELECT * FROM intervention WHERE patient_id=${reqId}`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT user query', err);
      res.sendStatus(500);
    });
});

module.exports = router;