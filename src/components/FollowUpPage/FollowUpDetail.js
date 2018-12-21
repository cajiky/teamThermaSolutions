import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Recurrence from './Recurrence';
import ChemotherapyType from './ChemotherapyType';
// import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

class FollowUpDetail extends Component {

    state = {
        date: null,
        cea: null,
        rec_modality: null,
        syst_location: false,
        last_contact: null,
        treatment: null,
        date_treatment: null,
        status: null,
        notes: null,
        location: null
    };

    // Called when the input field changes
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    // Called when the input field changes
    handleChangeCheckbox = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
    };
    
    render() {

        const { classes } = this.props;
        
        return(
            <div>
            <ExpansionPanel expanded={true}>
                <ExpansionPanelSummary >
                    <TextField
                        name="follow_up_date"
                        label="Follow Up Date"
                        className={classes.textField}
                        value={this.props.recurrence.date}
                        // fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <FormGroup row>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    name="evidence_of_disease"
                                    checked={this.props.recurrence.evidence_of_disease}
                                    onChange={this.handleChangeCheckbox}
                                    value={this.props.recurrence.evidence_of_disease}
                                    />
                                }
                                label="Evidence of Disease"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                            name="follow_up_notes"
                            label="Notes"
                            className={classes.textField}
                            value={this.props.notes}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            />
                        </Grid>
                        <Recurrence recurrence={this.props.recurrence} 
                            handleChange={this.handleChange}
                            handleChangeCheckbox={this.handleChangeCheckbox}/>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    recurrence: reduxState.recurrenceReducer,
});


export default connect(mapStateToProps) (withStyles(styles)(FollowUpDetail));