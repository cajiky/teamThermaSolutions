import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 500,
    },
    formControlSub: {
        minWidth: 100,
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    radio: {
        display: 'inline-block',
    },
    formLabel: {
        diaplay: 'none',
    },
    button: {
        verticalAlign: 'bottom',
    }
  });

class PatientProfileSearchResult extends Component {

    clearState = () => {
        this.props.dispatch({type: 'DROP_PATIENT_RESULT'});
      }

    selectPatient = () => {
    this.props.dispatch({type: 'SET_PATIENT_RESULT', payload: this.props.patientSearch});
    // document.cookie = `patientID=${this.props.patientSearch.patient_no}`
    this.props.history.push(`/MainTabsPage`);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.clearState} className={classes.button} variant="contained" color="primary">X</Button>
                {/* {JSON.stringify(this.props.patientSearch)} */}
                {this.props.patientSearch !== "patient not found" ?
                (<>
                <Typography><>
                {(this.props.patientSearch.patient_no) ? (<><h3>Patient ID:</h3> {this.props.patientSearch.patient_no}</>) : (<></>)}
                {(this.props.patientSearch.dob) ? (<><h3>Date of Birth:</h3> {this.props.patientSearch.dob}</>) : (<></>)}
                {(this.props.patientSearch.type_of_cancer) ? (<><h3>Type of Cancer:</h3> {this.props.patientSearch.type_of_cancer}</>) : (<></>)}
                {(this.props.patientSearch.gender) ? (<><h3>Gender:</h3> {this.props.patientSearch.gender}</>) : (<></>)}
                {(this.props.patientSearch.referal_date) ? (<><h3>Referral Date:</h3> {this.props.patientSearch.referal_date}</>) : (<></>)}
                {(this.props.patientSearch.hipec_date) ? (<><h3>HIPEC Date:</h3> {this.props.patientSearch.hipec_date}</>) : (<></>)}
                {(this.props.patientSearch.diagnosis_date) ? (<><h3>Diagnosis Date:</h3> {this.props.patientSearch.diagnosis_date}</>) : (<></>)}
                {(this.props.patientSearch.sensor) ? (<><h3>Sensor:</h3> Yes</>) : (<></>)}
                {(this.props.patientSearch.hospital_telephone) ? (<><h3>Hospital Telephone Number:</h3> {this.props.patientSearch.hospital_telephone}</>) : (<></>)}
                {(this.props.patientSearch.refering_doctor) ? (<><h3>Referring Doctor:</h3> {this.props.patientSearch.refering_doctor}</>) : (<></>)}
                {(this.props.patientSearch.notes) ? (<><h3>Notes:</h3> {this.props.patientSearch.notes}</>) : (<></>)}
                {(this.props.patientSearch.current_status) ? (<><h3>Current Status:</h3> {this.props.patientSearch.current_status}</>) : (<></>)}
                {(this.props.patientSearch.current_date) ? (<><h3>Current Date:</h3> {this.props.patientSearch.current_date}</>) : (<></>)}
                {(this.props.patientSearch.current_time) ? (<><h3>Current Time:</h3> {this.props.patientSearch.current_time}</>) : (<></>)}
                {(this.props.patientSearch.last_contact_date) ? (<><h3>Last Contact Date:</h3> {this.props.patientSearch.last_contact_date}</>) : (<></>)}
                {(this.props.patientSearch.date_of_death) ? (<><h3>Date of Death:</h3> {this.props.patientSearch.date_of_death}</>) : (<></>)}
                {(this.props.patientSearch.alive_on_date) ? (<><h3>Alive on Date:</h3> {this.props.patientSearch.alive_on_date}</>) : (<></>)}
                {(this.props.patientSearch.interval_prime_surgery) ? (<><h3>Interval prime surgery HIPEC:</h3> {this.props.patientSearch.interval_prime_surgery}</>) : (<></>)}
                {(this.props.patientSearch.survival_hipec_death) ? (<><h3>Survival HIPEC death:</h3> {this.props.patientSearch.survival_hipec_death}</>) : (<></>)}
                {(this.props.patientSearch.survival_hipec_last_contact) ? (<><h3>Survival HIPEC last contact:</h3> {this.props.patientSearch.survival_hipec_last_contact}</>) : (<></>)}
                {(this.props.patientSearch.interval_diagnosis_pc_hipec) ? (<><h3>Interval diagnosis PC-HIPEC:</h3> {this.props.patientSearch.interval_diagnosis_pc_hipec}</>) : (<></>)}
                </>
                </Typography>
                <Button onClick={this.selectPatient} className={classes.button} variant="contained" color="primary">Select this patient</Button></>) : (<><h3>Patient Not Found</h3></>)}
            </div>
        );
    }
}
const mapStateToProps = reduxState => ({
    patientSearch: reduxState.patientReducer.patientSearch,
});


export default withRouter(withStyles(styles)(connect(mapStateToProps)(PatientProfileSearchResult)));