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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';



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
        clinicalScore: '',
        pciScore: '',
        histologyScore: '',
        psdssScore: '(Auto)',
        slm: false,
    }

    //Function to handle the changes in our inputs and selectors.
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        }, this.calculatePSDSS)
        console.log(this.state);
    }

    //function in charge of calculating PSDSS Score
    calculatePSDSS = () => {
        const clin = Number(this.state.clinicalScore);
        const pci = Number(this.state.pciScore);
        const hist = Number(this.state.histologyScore);
        const calculatedNum = clin + pci + hist;
            this.setState({
                psdssScore: calculatedNum,
            })
    }
    
    //Function in charge of toggling switches from true to false and viceverse
    toggleSwitch = (event) => {
        this.setState ({
            [event.target.name]: event.target.checked
        })
        console.log(this.state);
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
                        <Paper elevation={12} className={classes.containerPaper}>
                        <Grid
                         container
                         direction="row"
                         justify="space-evenly"
                         alignItems="center"
                         >
                            {/* <Table>
                                <TableHead>
                                <TableRow>
                                    <TableCell>PSDSS</TableCell>
                                    <TableCell align="right">Clinical</TableCell>
                                    <TableCell align="right">PCI</TableCell>
                                    <TableCell align="right">Histology</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Low
                                        </TableCell>
                                        <TableCell align="right">No Symptoms = 0</TableCell>
                                        <TableCell align="right">Less than 10 = 1</TableCell>
                                        <TableCell align="right">Good/Moderate =1</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Med
                                        </TableCell>
                                        <TableCell align="right">Mild Symptoms = 1</TableCell>
                                        <TableCell align="right">10-20 = 3</TableCell>
                                        <TableCell align="right">Moderate N1-2 = 3</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            High
                                        </TableCell>
                                        <TableCell align="right">Severe Symptoms = 3</TableCell>
                                        <TableCell align="right">Greater Than 20 = 7</TableCell>
                                        <TableCell align="right">Poor/Signet = 9</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Score:
                                        </TableCell>
                                        <TableCell align="right">
                                        <TextField
                                            label="Clinical"
                                            style={{width: 130, marginBottom: 10,}}
                                            onChange={this.handleChange}
                                            name="clinicalScore"
                                            value={this.state.clinicalScore}
                                            id="patientWeightInput"
                                            className={classNames(classes.margin, classes.textField)}
                                        />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                label="PCI Score"
                                                style={{width: 130, marginBottom: 10,}}
                                                onChange={this.handleChange}
                                                name="pciScore"
                                                value={this.state.pciScore}
                                                id="patientWeightInput"
                                                className={classNames(classes.margin, classes.textField)}
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextField
                                                    label="Hist Score"
                                                    style={{width: 130, marginBottom: 10,}}
                                                    onChange={this.handleChange}
                                                    name="histologyScore"
                                                    value={this.state.histologyScore}
                                                    id="histologyScore"
                                                    className={classNames(classes.margin, classes.textField)}
                                                />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table> */}
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
                                    label="Clinical"
                                    style={{width: 130, marginBottom: 10,}}
                                    onChange={this.handleChange}
                                    name="clinicalScore"
                                    value={this.state.clinicalScore}
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
                                        label="PCI Score"
                                        style={{width: 130, marginBottom: 10,}}
                                        onChange={this.handleChange}
                                        name="pciScore"
                                        value={this.state.pciScore}
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
                                        label="Hist Score"
                                        style={{width: 130, marginBottom: 10,}}
                                        onChange={this.handleChange}
                                        name="histologyScore"
                                        value={this.state.histologyScore}
                                        id="histologyScore"
                                        className={classNames(classes.margin, classes.textField)}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                        <Grid item xs={12} className={classes.gridItem}></Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h5" align="right">Total: {this.state.psdssScore}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
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
                        checked={this.state.slm}
                        name="slm"
                        onChange={this.toggleSwitch}
                        value={this.state.slm}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem} align="center">
                        <FormControl variant="outlined" fullWidth="true">
                        {this.state.slm ? <InputLabel htmlFor="timing">Timing</InputLabel> : <InputLabel htmlFor="timing">Timing (Disabled)</InputLabel>}
                            <Select
                                align="center"
                                value={this.state.timing}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                    disabled={!this.state.slm}
                                    value={this.state.timing}
                                    name="timing"
                                    id="timing"
                                    />
                                    }
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.reduxState.dropdownOptions.timingTreamentOptions.map(time => (
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
                        disabled={!this.state.slm}
                        variant="outlined"
                        type="date"
                        fullWidth="true"
                        onChange={this.handleChange}
                        name="dateSLM"
                        value={this.state.dateSLM}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <FormControl variant="outlined" fullWidth="true">
                            {this.state.slm ? <InputLabel htmlFor="timing">Type</InputLabel> : <InputLabel htmlFor="timing">Type (Disabled)</InputLabel>}
                            <Select
                                align="center"
                                value={this.state.typeSLM}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                    disabled={!this.state.slm}
                                    value={this.state.typeSLM}
                                    name="typeSLM"
                                    id="typeSLM"
                                    />
                                    }
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.reduxState.dropdownOptions.treamentTypeOptions.map(type => (
                                        <MenuItem key={type.id} value={type.id}>{type.status}</MenuItem> 
                                    ))} 
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <TextField
                            disabled={!this.state.slm}
                            fullWidth="true"
                            className={classes.treatmentPrimeTumorNotes}
                            onChange={this.handleChange}
                            value={this.state.treatmentPrimeTumorNotes}
                            name='treatmentPrimeTumorNotes'
                            multiline
                            rows="5"
                            variant="outlined"
                            label={this.state.slm ? "Notes" : "Notes (Disabled)"}
                        />
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


export default connect(mapStateToProps) (withStyles(styles)(PSDSSPage))
