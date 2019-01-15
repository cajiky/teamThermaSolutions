import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const styles = theme => ({
    gridItem:{
        marginBottom: 10,
    },
    dropDown:{
        fullWidth: true,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
});

class IntakePageGeneral extends Component {
    // state = {
    //     bmi_auto: '',
    //     length_m: '',
    //     weight_kg: '',
    //     id: '',
    //     patient_id: '',
    //     crp: '',
    //     ca125: '',
    //     leucocyte: '',
    //     smoking: '',
    //     diabetes: '',
    //     insulin_dependent: '',
    //     cardiovascular: '',
    //     hypertension: '',
    //     stoma_pre_hipec: '',
    //     stoma_type: '',
    //     neo_adjuvant_chemo: '',
    //     neo_adjuvant_chemo_type: '',
    //     biological: '',
    //     notes: '',
    //     diagnostic_scopy: '',
    //     date_scopy: '',
    //     scopy_conclusion: '',
    //     scopy_notes: '',
    //     syn_metachronous: '',
    //     date_diagnosis_pc: '',
    //     assessment_of_pss: '',
    //     asa_score_date_time_stamp: '',
    //     date: '',
    // }

    // setInitialState = () => {
    //     this.setState ({
    //         ...this.state,
    //         bmi_auto: this.props.intake.bmi_auto,
    //         length_m: this.props.intake.length_m,
    //         weight_kg: this.props.intake.weight_kg,
    //         id: this.props.intake.id,
    //         patient_id: this.props.intake.patient_id,
    //         crp: this.props.intake.crp,
    //         ca125: this.props.intake.ca125,
    //         leucocyte: this.props.intake.leucocyte,
    //         smoking: this.props.intake.smoking,
    //         diabetes: this.props.intake.diabetes,
    //         insulin_dependent: this.props.intake.insulin_dependent,
    //         cardiovascular: this.props.intake.cardiovascular,
    //         hypertension: this.props.intake.hypertension,
    //         stoma_pre_hipec: this.props.intake.stoma_pre_hipec,
    //         stoma_type: this.props.intake.stoma_type,
    //         neo_adjuvant_chemo: this.props.intake.neo_adjuvant_chemo,
    //         neo_adjuvant_chemo_type: this.props.intake.neo_adjuvant_chemo_type,
    //         biological: this.props.intake.biological,
    //         notes: this.props.intake.notes,
    //         diagnostic_scopy: this.props.intake.diagnostic_scopy,
    //         date_scopy: this.props.intake.date_scopy,
    //         scopy_conclusion: this.props.intake.scopy_conclusion,
    //         scopy_notes: this.props.intake.scopy_notes,
    //         syn_metachronous: this.props.intake.syn_metachronous,
    //         date_diagnosis_pc: this.props.intake.date_diagnosis_pc,
    //         assessment_of_pss: this.props.intake.assessment_of_pss,
    //         asa_score_date_time_stamp: this.props.intake.asa_score_date_time_stamp,
    //         date: this.props.intake.date,
    //     }) 
    // }

    //Function to calculate the bmi for the patient.
    // calculateBMI = () => {
    //     let bmi;
    //     let height = Number(this.state.length_m);
    //     let weight = Number(this.state.weight_kg);
    //     let squaredHeight = height * height;
    //     // console.log(`SquaredHeight: ${squaredHeight}, Weight: ${weight}`)
    //     bmi = weight/squaredHeight;
    //     this.setState({
    //         bmi_auto: String(parseFloat(bmi).toFixed(2)),
    //     })
    // }

    //Function to handle the changes in our inputs and selectors.
    // handleChange = (event) => {
    //     this.setState ({
    //         [event.target.name]: event.target.value,
    //     }
    //     , this.calculateBMI)
    //     console.log(this.state);
    // }
    
    // updateEntriesInDB = () => {
    //     this.props.dispatch({type: 'UPSERT_DATA_FOR_INTAKE', payload: {state: this.state, id: this.props.patient.patient.id}})
    //     console.log('RUNNING UPDATEENTRIESINDB Function')
    // }

    componentDidMount(){
        // this.setInitialState();
    }

    // componentWillUnmount(){
    //     this.updateEntriesInDB();
    // }

    render() {
        const { classes } = this.props;
        return(
            <>
            <Grid container spacing={24}>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        // style={{width: 150}}
                        onChange={this.props.handleChange}
                        name="weight_kg"
                        value={this.props.intake.weight_kg}
                        id="patientWeightInput"
                        label="Weight/Kilograms"
                        notched="true"
                        className={classNames(classes.margin, classes.textField, classes.InputLabelProps)}
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        // }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        // style={{width: 150}}
                        onChange={this.props.handleChange}
                        name="length_m"
                        value={this.props.intake.length_m}
                        id="lengthInput"
                        label="Height/Meters"
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">M</InputAdornment>,
                        // }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        disabled
                        // style={{width: 150}}
                        onChange={this.props.handleChange}
                        name="bmi"
                        value={this.props.intake.bmi_auto}
                        id="bmi"
                        label="BMI (Body Mass Index)"
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">M</InputAdornment>,
                        // }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        // style={{width: 150}}
                        onChange={this.props.handleChange}
                        name="ca125"
                        value={this.props.intake.ca125}
                        id="ca125"
                        label="CEA"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        // style={{width: 150}}
                        onChange={this.props.handleChange}
                        name="crp"
                        value={this.props.intake.crp}
                        id="crp"
                        label="CRP"
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">M</InputAdornment>,
                        // }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        // style={{width: 150}}
                        onChange={this.props.handleChange}
                        name="length_m"
                        value={this.props.intake.leucocyte}
                        id="leucocyte"
                        label="Leucocyte"
                        // InputProps={{
                        //     startAdornment: <InputAdornment position="start">M</InputAdornment>,
                        // }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={2} className={classes.gridItem}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Smoking</FormLabel>
                        <RadioGroup
                            aria-label="Smoking"
                            name="smoking"
                            className={classes.group}
                            value={this.props.intake.smoking}
                            onChange={this.handleChange}
                            // margin="dense"
                        >
                            <FormControlLabel margin='dense' value='1' control={<Radio />} label="Yes" />
                            <FormControlLabel value='2' control={<Radio />} label="No" />
                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Diabetes</FormLabel>
                        <RadioGroup
                            aria-label="diabetes"
                            name="diabetes"
                            className={classes.group}
                            value={this.props.intake.diabetes}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value='1' control={<Radio />} label="Yes" />
                            <FormControlLabel value='2' control={<Radio />} label="No" />
                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Insulin Dependent</FormLabel>
                        <RadioGroup
                            aria-label="insulinDep"
                            name="insulin_dependent"
                            className={classes.group}
                            value={this.props.intake.insulin_dependent}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value='1' control={<Radio />} label="Yes" />
                            <FormControlLabel value='2' control={<Radio />} label="No" />
                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Cardiovascular</FormLabel>
                        <RadioGroup
                            aria-label="cardiovasc"
                            name="cardiovascular"
                            className={classes.group}
                            value={this.props.intake.cardiovascular}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value='1' control={<Radio />} label="Yes" />
                            <FormControlLabel value='2' control={<Radio />} label="No" />
                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Hypertension</FormLabel>
                        <RadioGroup
                            aria-label="Hypertension"
                            name="hypertension"
                            className={classes.group}
                            value={this.props.intake.hypertension}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value='1' control={<Radio />} label="Yes" />
                            <FormControlLabel value='2' control={<Radio />} label="No" />
                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                        </RadioGroup>
                    </FormControl>
                </Grid> 
            </Grid>
            </>
        )
    }
  
};

const mapStateToProps = reduxState => ({
    // intake: reduxState.intakeReducer,
    // patient: reduxState.patientReducer,
    dropdownOptions: reduxState.dropdownOptions,
});


export default connect(mapStateToProps) (withStyles(styles)(IntakePageGeneral))