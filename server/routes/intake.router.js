const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Post route template
 */
router.post('/getDataFor', (req, res) => {
    const patientID = req.body.id
    const sqlText = `SELECT * FROM intake WHERE patient_id = $1`
    pool.query(sqlText,[patientID])
    .then((result) => {
        res.send(result.rows[0]);
    })
    .catch((error) => {
        res.sendStatus(500);
        console.log(error);

    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;