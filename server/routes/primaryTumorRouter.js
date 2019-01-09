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
router.put('/', (req,res) => {
    const userInfo = req.body.userInfo
    console.log(userInfo)
    const queryTextUpsert = `INSERT INTO primary_tumor (patient_id, date_primary_diagnosis, primary_location, t, n, m, m_location, differentiation, mucinous, date_prime_surgery, intervention_type, setting,
        adj_chemotherapy, type, biological, notes)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        ON CONFLICT (patient_id)
        DO UPDATE SET date_primary_diagnosis=$2, primary_location=$3, t=$4,
            n=$5, m=$6, m_location=$7,
            differentiation=$8, mucinous=$9,
            date_prime_surgery=$10, intervention_type=$11, setting=$12, adj_chemotherapy=$13, type=$14, biological=$15,
            notes=$16
        WHERE primary_tumor.patient_id=$1`
        pool.query(queryTextUpsert, [userInfo.patient_id, userInfo.date_primary_diagnosis, userInfo.primary_location, userInfo.t,
            userInfo.n, userInfo.m, userInfo.m_location, userInfo.differentiation, userInfo.mucinous,
            userInfo.date_prime_surgery, userInfo.intervention_type, userInfo.setting, userInfo.adj_chemotherapy, userInfo.type, userInfo.biological,
            userInfo.notes])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log(error);
        })
})

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