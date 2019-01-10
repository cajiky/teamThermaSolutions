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

const styles = theme => ({
    gridItem:{
        marginBottom: 30,
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

class IntakePage extends Component {
    state = {
        bmi_auto: '(auto)',
        length_m: this.props.patient.weight_kg,
        weight_kg: this.props.patient.length_m,
        id: this.props.patient.id,
        patient_id: this.props.patient.patient_id,
        crp: this.props.patient.crp,
        ca125: this.props.patient.ca125,
        leucocyte: this.props.patient.leucocyte,
        smoking: this.props.patient.smoking,
        diabetes: this.props.patient.diabetes,
        insulin_dependant: this.props.patient.insulin_dependant,
        cardiovascular: this.props.patient.cardiovascular,
        hypertension: this.props.patient.hypertension,
        stoma_pre_hipec: this.props.patient.stoma_pre_hipec,
        stoma_type: this.props.patient.stoma_type,
        neo_adjuvant_chemo: this.props.patient.neo_adjuvant_chemo,
        neo_adjuvant_chemo_type: this.props.patient.neo_adjuvant_chemo_type,
        biological: this.props.patient.biological,
        notes: this.props.patient.notes,
        diagnostic_scopy: this.props.patient.diagnostic_scopy,
        date_scopy: this.props.patient.date_scopy,
        scopy_conclusion: this.props.patient.scopy_conclusion,
        scopy_notes: this.props.patient.scopy_notes,
        syn_metachronous: this.props.patient.syn_metachronous,
        date_diagnosis_pc: this.props.patient.date_diagnosis_pc,
        assessment_of_pss: this.props.patient.assessment_of_pss,
        asa_score_date_time_stamp: this.props.patient.asa_score_date_time_stamp,
        date: this.props.patient.date,
    }

    //Function to calculate the bmi for the patient.
    calculateBMI = () => {
        let bmi;
        let height = Number(this.state.length_m);
        let weight = Number(this.state.weight_kg);
        let squaredHeight = height * height;
        // console.log(`SquaredHeight: ${squaredHeight}, Weight: ${weight}`)
        bmi = weight/squaredHeight;
        this.setState({
            bmi_auto: String(parseFloat(bmi).toFixed(2)),
        })
    }

    //Function to handle the changes in our inputs and selectors.
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        }, this.calculateBMI)
        console.log(this.state);
    }
    
    // getInitialState = () => {
    //     let patientId = document.cookie.replace(/(?:(?:^|.*;\s*)patientID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    //     console.log(patientId);
    //     this.props.dispatch({type:'GET_INITIAL_DATA_FOR_INTAKE', payload: patientId.id });
    // }
    updateEntriesInDB = () => {
        this.props.dispatch({type: 'UPSERT_DATA_FOR_INTAKE', payload: {state: this.state, id: this.props.patient.patient.id}})
        console.log('RUNNING UPDATEENTRIESINDB Function')
    }

    componentDidMount(){

    }

    render() {
        const { classes } = this.props;
        return(
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            >
            {/* Start of the fist column on the page  */}
                <Grid item xs={5}>
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >
                    {/* Start of the first section in the first column */}
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h4">
                                General Information
                            </Typography>
                        </Grid>
                        {/* The six grid items below is the section of mumbo jumbo at the top of the first column */}
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    Weight:
                                </Typography>
                                <TextField
                                    style={{width: 150}}
                                    onChange={this.handleChange}
                                    name="weight_kg"
                                    value={this.state.weight_kg}
                                    id="patientWeightInput"
                                    className={classNames(classes.margin, classes.textField)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    Length:
                                </Typography>
                                <TextField
                                    style={{width: 150}}
                                    onChange={this.handleChange}
                                    name="length_m"
                                    value={this.state.length_m}
                                    id="lengthInput"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">M</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    BMI:
                                </Typography>
                                <Typography variant="h4">{this.state.bmi_auto}</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    CEA:
                                </Typography>
                                <TextField
                                    style={{width: 150}}
                                    onChange={this.handleChange}
                                    name="ca125"
                                    value={this.state.ca125}
                                    id="ca125"
                                />
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    CRP:
                                </Typography>
                                <TextField
                                    style={{width:150}}
                                    onChange={this.handleChange}
                                    name="crp"
                                    vlaue={this.state.crp}
                                    id="copInput"
                                />
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    Leucocyte:
                                </Typography>
                                <TextField
                                    style={{width:150}}
                                    onChange={this.handleChange}
                                    name="leucocyte"
                                    value={this.state.leucocyte}
                                    id="leucocyte"
                                />
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Smoking</FormLabel>
                                    <RadioGroup
                                        aria-label="Smoking"
                                        name="smoking"
                                        className={classes.group}
                                        value={this.state.smoking}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='2' control={<Radio />} label="No" />
                                        <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Diabetes</FormLabel>
                                    <RadioGroup
                                        aria-label="diabetes"
                                        name="diabetes"
                                        className={classes.group}
                                        value={this.state.diabetes}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='2' control={<Radio />} label="No" />
                                        <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Insulin Dependant</FormLabel>
                                    <RadioGroup
                                        aria-label="insulinDep"
                                        name="insulin_dependant"
                                        className={classes.group}
                                        value={this.state.insulin_dependant}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='2' control={<Radio />} label="No" />
                                        <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Cardiovascular</FormLabel>
                                    <RadioGroup
                                        aria-label="cardiovasc"
                                        name="cardiovascular"
                                        className={classes.group}
                                        value={this.state.cardiovascular}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='2' control={<Radio />} label="No" />
                                        <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Hypertension</FormLabel>
                                    <RadioGroup
                                        aria-label="Hypertension"
                                        name="hypertension"
                                        className={classes.group}
                                        value={this.state.hypertension}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='2' control={<Radio />} label="No" />
                                        <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>           
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                {/* start of the second column on the page. going to contain two grid containers */}
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >
                    {/* Start of the first Section on the second column */}
                        <Grid item xs={12}>
                            <Grid 
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            >
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography variant="h4">
                                        Neo Adjuvant Treatment
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Neo Adjuvant Chemo:</FormLabel>
                                        <RadioGroup
                                            aria-label="nac"
                                            name="neo_adjuvant_chemo"
                                            className={classes.group}
                                            value={this.state.neo_adjuvant_chemo}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                            <FormControlLabel value='2' control={<Radio />} label="No" />
                                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Type
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Biological
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem} align="center">
                                    <FormControl variant="outlined" style={{width: 200}}>
                                        <Select
                                            value={this.state.neo_adjuvant_chemo_type}
                                            onChange={this.handleChange}
                                            input={
                                            <OutlinedInput
                                                value={this.state.neo_adjuvant_chemo_type}
                                                name="neo_adjuvant_chemo_type"
                                                id="type"
                                            />
                                            }
                                        >
                                            {this.props.dropdownOptions.adjChemoTypeOptions.map(adj => (
                                                <MenuItem key={adj.id} value={adj.id}>{adj.status}</MenuItem> 
                                            ))} 
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem} align="center">
                                    <FormControl variant="outlined" style={{width: 200}}>
                                        <Select
                                            value={this.state.biological}
                                            onChange={this.handleChange}
                                            type="int"
                                            input={
                                            <OutlinedInput
                                                value={this.state.biological}
                                                name="biological"
                                                id="biological"
                                            />
                                            }
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {this.props.dropdownOptions.biologicalOptions.map(adj => (
                                                <MenuItem key={adj.id} value={adj.id}>{adj.status}</MenuItem> 
                                            ))} 
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem}>
                                <TextField
                                    fullWidth="true"
                                    className={classes.treatmentPrimeTumorNotes}
                                    onChange={this.handleChange}
                                    value={this.state.notes}
                                    name='notes'
                                    multiline
                                    rows="5"
                                    variant="outlined"
                                    label="Notes"
                                />
                            </Grid>
                            </Grid>
                    {/* Start of the second section in the second column */}
                            <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            >
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography variant="h4">
                                        Diagnostic Laparoscopy
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Diagnostic Scopy</FormLabel>
                                        <RadioGroup
                                            aria-label="diagnostic_scopy"
                                            name="diagnostic_scopy"
                                            className={classes.group}
                                            value={this.state.diagnostic_scopy}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value='1' control={<Radio />} label="Yes" />
                                            <FormControlLabel value='2' control={<Radio />} label="No" />
                                            <FormControlLabel value='3' control={<Radio />} label="Unknown" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Scopy Conclusion</FormLabel>
                                        <RadioGroup
                                            aria-label="scopy_conclusion"
                                            name="scopy_conclusion"
                                            className={classes.group}
                                            value={this.state.scopy_conclusion}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value='1' control={<Radio />} label="Amenable" />
                                            <FormControlLabel value='2' control={<Radio />} label="Benefit of Doubt" />
                                            <FormControlLabel value='3' control={<Radio />} label="No Go" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem}>
                                    <Typography variant="overline">Date of Scopy:</Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem}>
                                    <TextField 
                                    variant="outlined"
                                    type="date"
                                    fullWidth="true"
                                    onChange={this.handleChange}
                                    name="date_scopy"
                                    value={this.state.date_scopy}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem} onClick={this.updateEntriesInDB}>
                                <Button color="primary">
                                    Save
                                </Button>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
  
};

const mapStateToProps = reduxState => ({
    patient: reduxState.patientReducer,
    dropdownOptions: reduxState.dropdownOptions,
});


export default connect(mapStateToProps) (withStyles(styles)(IntakePage))
