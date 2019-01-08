const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/getDataFor', (req, res) => {
    const sqlText = `SELECT * FROM primary_tumor WHERE patient_id = $1`
    pool.query(sqlText, [req.body.id])
    .then((result) => {
        res.send(result.rows[0])
    })
    .catch((error) => {
        console.log('error in our post /getDataFor req in our primaryTumorRouter.js', error);
        res.sendStatus(501)
    })
});

module.exports = router;