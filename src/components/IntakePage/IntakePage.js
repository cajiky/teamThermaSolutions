import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

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
        bmi: '(auto)',
        length: '',
        patientWeight: '',
    }

    //Function to calculate the bmi for the patient.
    calculateBMI = () => {
        let bmi;
        let height = Number(this.state.length);
        let weight = Number(this.state.patientWeight);
        let squaredHeight = height * height;
        // console.log(`SquaredHeight: ${squaredHeight}, Weight: ${weight}`)
        bmi = weight/squaredHeight;
        this.setState({
            bmi: String(parseFloat(bmi).toFixed(2)),
        })
    }

    //Function to handle the changes in our inputs and selectors.
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        }, this.calculateBMI)
        console.log(this.state);
    }
    
    // componentDidUpdate(prevState){
    //     if(this.state.length !== prevState.length || this.state.patientWeight !== prevState.patientWeight){
    //         console.log(this.state);
    //     }
    // }

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
                                    name="patientWeight"
                                    value={this.state.patientWeight}
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
                                    name="length"
                                    value={this.state.length}
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
                                <Typography variant="h4">{this.state.bmi}</Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <Typography variant="overline">
                                    CEA:
                                </Typography>
                                <TextField
                                    style={{width: 150}}
                                    onChange={this.handleChange}
                                    name="cea"
                                    value={this.state.cea}
                                    id="ceaInput"
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
                                    id="crpInput"
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
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

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
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Insulin Dependant</FormLabel>
                                    <RadioGroup
                                        aria-label="insulinDep"
                                        name="insulinDep"
                                        className={classes.group}
                                        value={this.state.insulinDep}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Cardiovasc</FormLabel>
                                    <RadioGroup
                                        aria-label="cardiovasc"
                                        name="cardiovasc"
                                        className={classes.group}
                                        value={this.state.cardiovasc}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

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
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

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
                                            name="nac"
                                            className={classes.group}
                                            value={this.state.nac}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                            <FormControlLabel value='false' control={<Radio />} label="No" />
                                            <FormControlLabel value='null' control={<Radio />} label="Unknown" />

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
                                            value={this.state.type}
                                            onChange={this.handleChange}
                                            input={
                                            <OutlinedInput
                                                value={this.state.type}
                                                name="type"
                                                id="type"
                                            />
                                            }
                                        >
                                            {this.props.reduxState.dropdownOptions.adjChemoTypeOptions.map(adj => (
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
                                            {this.props.reduxState.dropdownOptions.biologicalOptions.map(adj => (
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
                                    value={this.state.adjChemoNotes}
                                    name='adjChemoNotes'
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
                                            aria-label="Hypertension"
                                            name="diagnosticScopy"
                                            className={classes.group}
                                            value={this.state.diagnosticScopy}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                            <FormControlLabel value='false' control={<Radio />} label="No" />
                                            <FormControlLabel value='null' control={<Radio />} label="Unknown" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} className={classes.gridItem}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Scopy Conclusion</FormLabel>
                                        <RadioGroup
                                            aria-label="Hypertension"
                                            name="scopyConclusion"
                                            className={classes.group}
                                            value={this.state.scopyConclusion}
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
                                    name="dateOfScopy"
                                    value={this.state.dateOfScopy}
                                    />
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
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(IntakePage))
