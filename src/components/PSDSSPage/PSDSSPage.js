import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import moment from 'moment';



const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
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
      table: {
        // maxWidth: 200,
        paddingBottom: 20,
      },
      headingElements:{
          marginTop: 10,
          marginBottom: 30,
      },
      containerPaper:{
          padding: 20,
      }
});

class PSDSSPage extends Component {
    state = {
        clinical: '',
        pci: '',
        histology: '',
        synchronous_liver_treatment: false,
        timing: '',
        date_treatment: '',
        treatment_type: '',
        notes: '',
        total: '(auto)',
    }

    //Function to set the state of the component equal to the redux state
    setInitialState = () => {
        this.setState({
            ...this.state,
            patient_id: this.props.psdss.patient_id,
            clinical: this.props.psdss.clinical,
            pci: this.props.psdss.pci,
            histology: this.props.psdss.histology,
            synchronous_liver_treatment: this.props.psdss.synchronous_liver_treatment,
            timing: this.props.psdss.timing,
            date_treatment: this.props.psdss.date_treatment,
            treatment_type: this.props.psdss.treatment_type,
            notes: this.props.psdss.notes,
            total: this.props.psdss.total,
        })
    }

    //Function to handle the changes in our inputs and selectors.
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        }
        // , this.calculatePSDSS
        )
        console.log(this.state);
    }

    //function in charge of calculating PSDSS Score
    calculatePSDSS = () => {
        const clin = Number(this.state.clinical);
        const pci = Number(this.state.pci);
        const hist = Number(this.state.histology);
        const calculatedNum = clin + pci + hist;
            this.setState({
                total: calculatedNum,
            })
    }
    
    //Function in charge of toggling switches from true to false and viceverse
    toggleSwitch = (event) => {
        this.setState ({
            [event.target.name]: event.target.checked
        })
        console.log(this.state);
    }

    //Function to update or set a new row.
    upsertEntriesInDB = () => {
        this.props.dispatch({type: 'UPSERT_DATA_FOR_PSDSS', payload: {state: this.state, id: this.props.patient.patient.id}})
    }

    componentDidMount(){
        this.setInitialState();
    }

    componentWillUnmount(){
        this.upsertEntriesInDB();
    }

    render() {
        const {classes} = this.props;
        return(
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            >
            {/* Start of the first column of the page. this will hold the "legend" for the user to use to fill out the form */}
            <Grid item xs={6} className={classes.gridItem}>
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                >
                     <Grid item xs={12} className={classes.gridItem} align="center">
                        <Typography variant="h4">
                            Peritonial Surface Disease Severity Scale
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem} align="center">
                    {/* This is the table that will hold the legend for the surgens to refference while they enter in scores. */}
                        {/* <Paper elevation={12} className={classes.containerPaper}> */}
                            <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                            >
                                <Grid item xs={4} className={classes.headingElements} align="center">
                                    <Typography variant="h4">
                                        Clinical
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.headingElements} align="center">
                                    <Typography variant="h4">
                                        PCI
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.headingElements} align="center">
                                    <Typography variant="h4">
                                        Histology
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem} align="center">
                                    <Divider />
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        No Symptoms
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        {"<"}  10
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Good/Moderate NO
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        1
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        1
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem} align="center">
                                    <Divider variant="fullWidth"></Divider>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Mild Symptoms
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        10-20
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Moderate N1-2
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        1
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        3
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        3
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem} align="center">
                                    <Divider variant="fullWidth"></Divider>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Severe Symptoms
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        {">"}  20
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="overline">
                                        Poor/Signet
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        6
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        7
                                    </Typography>
                                </Grid>
                                <Grid itme xs={4} className={classes.gridItem} align="center">
                                    <Typography variant="subheading">
                                        9
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem} align="center">
                                    <Divider variant="fullWidth"></Divider>
                                </Grid>
                                <Grid item xs={2} className={classes.gridItem} align="center">
                                    <TextField
                                    variant="outlined"
                                    label="Clinical"
                                    style={{width: 130, marginBottom: 10,}}
                                    onChange={this.handleChange}
                                    name="clinical"
                                    value={this.state.clinical}
                                    id="patientWeightInput"
                                    className={classNames(classes.margin, classes.textField)}
                                    />
                                </Grid>
                                <Grid itme xs={2}>
                                    <Typography variant="overline">
                                        +
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className={classes.gridItem} align="center">
                                    <TextField
                                        variant="outlined"
                                        label="PCI Score"
                                        style={{width: 130, marginBottom: 10,}}
                                        onChange={this.handleChange}
                                        name="pci"
                                        value={this.state.pci}
                                        id="patientWeightInput"
                                        className={classNames(classes.margin, classes.textField)}
                                    />
                                </Grid>
                                <Grid itme xs={2}>
                                    <Typography variant="overline">
                                        +
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className={classes.gridItem}>
                                    <TextField
                                        variant="outlined"
                                        label="Hist Score"
                                        style={{width: 130, marginBottom: 10,}}
                                        onChange={this.handleChange}
                                        name="histology"
                                        value={this.state.histology}
                                        id="histologyScore"
                                        className={classNames(classes.margin, classes.textField)}
                                    />
                                </Grid>
                            </Grid>
                        {/* </Paper> */}
                        <Grid item xs={12} className={classes.gridItem}></Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h5" align="right">Total: {this.state.total}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Button onClick={this.upsertEntriesInDB} className={classes.button}
                    variant="contained" color="primary">
                    Save
                </Button>
            </Grid>
            {/* Start of the second column of the page. this will hold the "Sync liver metistasis" */}
            <Grid item xs={5} className={classes.gridItem}>
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                >
                    <Grid item xs={12} className={classes.gridItem} align="center">
                        <Typography variant="h4">
                            Additional Data
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                        <Typography variant="overline">Synchronous Liver Metastases:</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                        <Switch
                        checked={this.state.synchronous_liver_treatment}
                        name="synchronous_liver_treatment"
                        onChange={this.toggleSwitch}
                        value={this.state.synchronous_liver_treatment}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem} align="center">
                        <FormControl variant="outlined" fullWidth="true">
                        {this.state.synchronous_liver_treatment ? <InputLabel htmlFor="timing">Timing</InputLabel> : <InputLabel htmlFor="timing">Timing (Disabled)</InputLabel>}
                            <Select
                                align="center"
                                value={this.state.timing}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                    disabled={!this.state.synchronous_liver_treatment}
                                    value={this.state.timing}
                                    name="timing"
                                    id="timing"
                                    />
                                    }
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.timingTreamentOptions.map(time => (
                                        <MenuItem key={time.id} value={time.id}>{time.status}</MenuItem> 
                                    ))} 
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem} align="center">
                        <Typography variant="overline">
                            Date:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                        <TextField 
                        disabled={!this.state.synchronous_liver_treatment}
                        variant="outlined"
                        type="date"
                        fullWidth="true"
                        onChange={this.handleChange}
                        name="date_treatment"
                        value={moment(this.state.date_treatment).format('YYYY-MM-DD')}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <FormControl variant="outlined" fullWidth="true">
                            {this.state.synchronous_liver_treatment ? <InputLabel htmlFor="timing">Type</InputLabel> : <InputLabel htmlFor="timing">Type (Disabled)</InputLabel>}
                            <Select
                                align="center"
                                value={this.state.treatment_type}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                    disabled={!this.state.synchronous_liver_treatment}
                                    value={this.state.treatment_type}
                                    name="treatment_type"
                                    id="typeSLM"
                                    />
                                    }
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.treamentTypeOptions.map(type => (
                                        <MenuItem key={type.id} value={type.id}>{type.status}</MenuItem> 
                                    ))} 
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <TextField
                            disabled={!this.state.synchronous_liver_treatment}
                            fullWidth="true"
                            className={classes.treatmentPrimeTumorNotes}
                            onChange={this.handleChange}
                            value={this.state.notes}
                            name='notes'
                            multiline
                            rows="5"
                            variant="outlined"
                            label={this.state.synchronous_liver_treatment ? "Notes" : "Notes (Disabled)"}
                        />
                    </Grid>
                </Grid>
                {/* <Button onClick={this.upsertEntriesInDB} className={classes.button}
                variant="contained" color="primary">
                Save
                </Button> */}
            </Grid>
            </Grid>
        )
    }
};

const mapStateToProps = reduxState => ({
    timingTreamentOptions: reduxState.dropdownOptions.timingTreamentOptions,
    treamentTypeOptions: reduxState.dropdownOptions.treamentTypeOptions,
    psdss: reduxState.psdssReducer,
    // dropdownOptions: reduxState.dropdownOptions,
    patient: reduxState.patientReducer,
});

export default connect(mapStateToProps) (withStyles(styles)(PSDSSPage))
