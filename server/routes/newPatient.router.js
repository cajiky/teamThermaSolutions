const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get(`/:key`, (req, res) => {
    console.log(req.params);
    const patientId = req.params.key;
    console.log('THIS IS THE PATIENT ID', patientId);
    const sqlText = `SELECT * FROM patients WHERE patients.patient_no = $1;`;
    pool.query(sqlText, [patientId]).then( rows => {
        patientSearch = rows.rows[0]
        result = {patientSearch: patientSearch}
            // console.log(result.patientSearch);
            // console.log(Object.keys(result))
        // what does the result look like? if it isn't an empty object i.e. undefined
        if(result.patientSearch !== undefined
        ){
        res.send(result);
        } else { // else, still send something that we can use to render.
            // maybe not the best way to do this, but it does work.
        result = {patientSearch: 'patient not found'}
        res.send(result);
    }
})
.catch((error) => {
    console.log('GET error from the server', error);
    res.sendStatus(500); // A good server always responds!
})
});

//*** GET last patient ID from db */
router.get((req, res) => {
    const sqlText = `SELECT * FROM patients ORDER BY id DESC LIMIT 1;`;
    pool.query(sqlText).then( rows => {
        newPatientId = rows.rows[0].id
        console.log(newPatientId);
        result = {newPatientId}
        res.send(result);
})
.catch((error) => {
    console.log('GET error from the server', error);
    res.sendStatus(500); // A good server always responds!
})
});

/**
 * POST route template
 */
router.post('/', async(req, res) => {
    let newPatientObj = req.body;
    console.log(newPatientObj);
    const sqlText = `INSERT INTO patients (toc_id, patient_no, dob, gender, referal_date, hipec_date, diagnosis_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
    pool.query(sqlText, [newPatientObj.toc, newPatientObj.patientId, newPatientObj.dob, newPatientObj.gender, newPatientObj.dateOfReferral, newPatientObj.dateOfHipec, newPatientObj.diagnosisDate])
      .then((response) => {
          console.log('There was success POSTing a new patient', response)
      }) 
      .catch((error) => {
          console.log('There was an error POSTing a new patient', error)
      })
});

module.exports = router;