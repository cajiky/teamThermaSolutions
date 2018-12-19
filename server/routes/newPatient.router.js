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
        patient = rows.rows
        result = {patient: patient}
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