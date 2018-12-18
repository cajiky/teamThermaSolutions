const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('GET req.params.id', req.params.id);
    
    let reqId = req.params.id;
    const queryText = `SELECT * FROM person`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT tasks query', err);
        res.sendStatus(500);
      });
  });


router.post('/', (req, res, next) => {  
    console.log('New User POST req.body', req.body);
    const title = req.body.title;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const access_level = req.body.accessLevel;
  
    const queryText = 'INSERT INTO person (title, first_name, last_name, username, password, access_level) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
    pool.query(queryText, [title, firstName, lastName, username, password, access_level])
      .then(() => { res.sendStatus(201); })
      .catch((err) => { next(err); });
  });


module.exports = router;