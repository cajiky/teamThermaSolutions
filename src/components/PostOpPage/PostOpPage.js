import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ReOperation from './ReoperationSelector';
import Mortality from './MortalitySelector'
import DischargeStatus from './DischargeStatus';
import SeriousAdverseEvents from './SeriousAdverseEvents';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    expanded: {
      backgroundColor: '#cccccc',
      minHeight: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    group: {
        flexDirection: 'row',
    }
});



class PostOpPage extends Component {

    state = {
        changesMade: false,
        id: 0,
        icu_stays: 0,
        mcu_stays: 0,
        hospital_stays: 0,
        notes: '',
        serious_advese_event: false,
        score: '',
        reoperation: null,
        hospital_mortality: null,
        status_at_discharge: 0,
        discharge_notes: '',
    };

    savePostOp = () => {
        // alert('Add new followup');
        if (this.state.changesMade) {
            console.log('before update post op', this.state)
            this.props.dispatch({ type: 'UPDATE_POST_OP', payload: this.state});
        }
    };

    componentDidMount () {
        this.setState({
            id: this.props.postOp.id,
            icu_stays: this.props.postOp.icu_stays,
            mcu_stays: this.props.postOp.mcu_stays,
            hospital_stays: this.props.postOp.hospital_stays,
            notes: this.props.postOp.notes,
            serious_advese_event: this.props.postOp.serious_advese_event,
            score: this.props.postOp.score,
            reoperation: this.props.postOp.reoperation,
            hospital_mortality: this.props.postOp.hospital_mortality,
            status_at_discharge: this.props.postOp.status_at_discharge,
            discharge_notes: this.props.postOp.discharge_notes,
        })
        console.log('immediately after set state', this.state);
    }

    componentWillUnmount () {
        this.savePostOp();
    }

    // Called when the input field changes
    handleChange = (event) => {
        this.state.changesMade = true;
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    // Called when the input field changes
    handleChangeCheckbox = (event) => {
        console.log('in checkbox', this.state.serious_advese_event);
        this.state.changesMade = true;
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
    }
    
    render() {
        const { classes } = this.props;

        return(
            <div>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                <TextField
                name="icu_stays"
                label="ICU Stay (days)"
                className={classes.textField}
                value={this.state.icu_stays}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                />
                <TextField
                name="hospital_stays"
                label="Hospital Stay (days)"
                className={classes.textField}
                value={this.state.hospital_stays}
                fullWidth
                onChange={this.handleChange}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />  
                </Grid>
                <Grid item xs>
                <TextField
                name="notes"
                label="Notes"
                className={classes.textField}
                value={this.state.notes}
                multiline
                rows="5"
                fullWidth
                onChange={this.handleChange}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
                </Grid>
            </Grid>
            <FormGroup row>
                <FormControlLabel
                control={
                    <Checkbox
                    name="serious_advese_event"
                    checked={this.state.serious_advese_event}
                    onChange={this.handleChangeCheckbox}
                    // value={this.state.serious_advese_event}
                    />
                }
                label="Serious Adverse Event"
                />
            </FormGroup>
            <ExpansionPanel expanded={this.state.serious_advese_event}>
                <ExpansionPanelSummary >
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Score</FormLabel>
                        <RadioGroup 
                            aria-label="Serious Adverse Event Score"
                            name="score"
                            className={classes.group}
                            value={this.state.score}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="0" control={<Radio />} label="0" />
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>
                    </FormControl>                    
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={24}>
                        <SeriousAdverseEvents handleChangeCheckbox={this.handleChangeCheckbox}/>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <Grid container spacing={24}>
                <Grid item xs={2}>
                    <ReOperation reoperation={this.state.reoperation} handleChange={this.handleChange}/>
                </Grid>
                <Grid item xs={2}>
                    <Mortality hospital_mortality={this.state.hospital_mortality} handleChange={this.handleChange}/>
                </Grid>
                <Grid item xs={2}>
                    <DischargeStatus status_at_discharge={this.state.status_at_discharge} handleChange={this.handleChange}/>
                </Grid>                
                <Grid item xs>
                <TextField
                name="discharge_notes"
                label="Discharge Notes"
                className={classes.textField}
                value={this.state.discharge_notes}
                multiline
                rows="2"
                fullWidth
                onChange={this.handleChange}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />      
                
            </Grid>
            </Grid>
                {/* <h1>PostOp Page</h1>
                <h3>This is the PostOpPage and includes the following inputs and drowdowns</h3>
                <h3>ICU Stays, Hospital Stays, MCU Stay, Stay Notes, Serious Adverse Event, ReOperation, Hospital Mortality, Status as Discharge, Notes</h3> */}
            <Button onClick={this.savePostOp} className={classes.button}
                variant="contained" color="primary">
                Save
            </Button>      

            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    postOp: reduxState.postOp,
    // patientSearch: reduxState.patientReducer.patientSearch
});


export default connect(mapStateToProps) (withStyles(styles)(PostOpPage));