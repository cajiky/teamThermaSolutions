import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FollowUpDetailRecurrence from './FollowUpDetailRecurrence';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    expasion: {
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
    },
    superCool: {
        backgroundColor: '#eeeeee',
        height: 25,
    }
});


class FollowUpDetail extends Component {

    state = {
        id: 0,
        patient_id: 0,
        follow_up_id: null,
        follow_up_date: null,
        evidence_of_disease: false,
        follow_up_notes: null,
        cea: null,
        rec_modality: null,
        syst_location: false,
        last_contact: null,
        treatment: null,
        date_treatment: null,
        status: null,
        treatment_notes: null,
        location: null
    };

    componentDidMount () {
        console.log('in component mount follow up detail', this.props.followup);
        // this.props.dispatch({type: 'FETCH_POST_OP'});
        let followUpDate = null;
        if (this.props.followup.follow_up_date != null) {
            followUpDate = moment(this.props.followup.follow_up_date).format('YYYY-MM-DD')
        }
        let lastContactDate = null;
        if (this.props.followup.last_contact != null) {
            lastContactDate = moment(this.props.followup.last_contact).format('YYYY-MM-DD')
        }
        let treatmentDate = null;
        if (this.props.followup.date_treatment != null) {
            treatmentDate = moment(this.props.followup.date_treatment).format('YYYY-MM-DD')
        }
        this.setState({
            id: this.props.followup.id,
            patient_id: this.props.followup.patient_id,
            follow_up_id: this.props.followup.follow_up_id,
            follow_up_date: followUpDate,
            evidence_of_disease: this.props.followup.evidence_of_disease,
            follow_up_notes: this.props.followup.follow_up_notes,
            cea: this.props.followup.cea,
            rec_modality: this.props.followup.rec_modality,
            syst_location: this.props.followup.syst_location,
            last_contact: lastContactDate,
            treatment: this.props.followup.treatment,
            date_treatment: treatmentDate,
            status: this.props.followup.status,
            treatment_notes: this.props.followup.treatment_notes,
            location: this.props.followup.location
        })
    }

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

    updateFollowUpHistory = () => {
        // alert('Update followup history');
        this.props.dispatch({type: 'UPDATE_FOLLOW_UP_HISTORY', payload: this.state});
        this.props.dispatch({type: 'FETCH_FOLLOW_UP_HISTORY', payload: this.state.patient_id});
    };
    
    render() {

        const { classes } = this.props;
        
        return(
            <div>
            <ExpansionPanel>
                <ExpansionPanelSummary className={classes.superCool} expandIcon={<ExpandMoreIcon />}>
                    <h3>{this.state.follow_up_date}</h3>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                        <TextField
                            name="follow_up_date"
                            label="Follow Up Date"
                            className={classes.textField}
                            value={moment(this.state.follow_up_date).format('YYYY-MM-DD')}
                            // fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="date"
                            onChange={this.handleChange}
                            margin="normal"
                            // variant="outlined"
                        />
                        </Grid>

                        <Grid item xs={3}>
                            <FormGroup row>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    name="evidence_of_disease"
                                    checked={this.state.evidence_of_disease}
                                    onChange={this.handleChangeCheckbox}
                                    value={this.state.evidence_of_disease}
                                    />
                                }
                                label="Evidence of Disease"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            name="follow_up_notes"
                            label="Notes"
                            className={classes.textField}
                            value={this.state.follow_up_notes}
                            rows={4}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                            margin="normal"
                            // variant="outlined"
                            />
                        </Grid>
                        <Divider variant="middle" />
                        {/* display recurrence information only if evidence of disease */}
                        {this.state.evidence_of_disease && 
                        <FollowUpDetailRecurrence recurrence={this.state} 
                            handleChange={this.handleChange}
                            handleChangeCheckbox={this.handleChangeCheckbox}/>
                        }
                    </Grid>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button onClick={this.updateFollowUpHistory} className={classes.button}
                            variant="contained" color="primary">
                        Update
                    </Button>      
                </ExpansionPanelActions>
            </ExpansionPanel>
            </div>
        )
    }
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(FollowUpDetail));