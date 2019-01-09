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
import FollowUpDetailDetail from './FollowUpDetailDetail';
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

    // state = {
    //     id: 0,
    //     patient_id: 0,
    //     follow_up_id: null,
    //     date: null,
    //     evidence_of_disease: false,
    //     follow_up_notes: null,
    //     recurrence: false,
    //     cea: null,
    //     rec_modality: null,
    //     syst_location: false,
    //     last_contact: null,
    //     treatment: null,
    //     date_treatment: null,
    //     status: null,
    //     treatment_notes: null,
    //     location: null
    // };

    componentDidMount () {
        console.log('in component mount follow up detail', this.props.history);
        // this.props.dispatch({type: 'FETCH_POST_OP'});
        // let followUpDate = null;
        // if (this.props.history.date != null) {
        //     followUpDate = moment(this.props.history.date).format('YYYY-MM-DD')
        // }
        // let lastContactDate = null;
        // if (this.props.history.last_contact != null) {
        //     lastContactDate = moment(this.props.history.last_contact).format('YYYY-MM-DD')
        // }
        // let treatmentDate = null;
        // if (this.props.history.date_treatment != null) {
        //     treatmentDate = moment(this.props.history.date_treatment).format('YYYY-MM-DD')
        // }
        // this.setState({
        //     id: this.props.history.id,
        //     patient_id: this.props.history.patient_id,
        //     follow_up_id: this.props.history.follow_up_id,
        //     date: this.props.history.date,
        //     evidence_of_disease: this.props.history.evidence_of_disease,
        //     follow_up_notes: this.props.history.follow_up_notes,
        //     recurrence: this.props.history.recurrence,
        //     cea: this.props.history.cea,
        //     rec_modality: this.props.history.rec_modality,
        //     syst_location: this.props.history.syst_location,
        //     last_contact: this.props.history.last_contact,
        //     treatment: this.props.history.treatment,
        //     date_treatment: this.props.history.date_treatment,
        //     status: this.props.history.status,
        //     treatment_notes: this.props.history.treatment_notes,
        //     location: this.props.history.location
        // })
    }

    // Called when the input field changes
    // handleChange = (event) => {
    //     this.setState({
    //         ...this.state,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // Called when the input field changes
    // handleChangeCheckbox = (event) => {
    //     this.setState({
    //         ...this.state,
    //         [event.target.name]: event.target.checked,
    //     });
    // };

    // updateFollowUpHistory = () => {
    //     // alert('Update followup history');
    //     this.props.dispatch({type: 'UPDATE_FOLLOW_UP_HISTORY', payload: this.state});
    //     // this.props.dispatch({type: 'FETCH_FOLLOW_UP_HISTORY', payload: this.state.patient_id});
    // };
    
    render() {

        const { classes } = this.props;
        
        return(
            <div>
            {/* <pre>{JSON.stringify(this.props.history)}</pre> */}
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary className={classes.superCool} expandIcon={<ExpandMoreIcon />}>
                    {this.props.history.date ? (<h3>{moment(this.props.history.date).format('YYYY-MM-DD')}</h3>) : (<h3>Enter Details</h3>)}
                </ExpansionPanelSummary>
                <FollowUpDetailDetail history={this.props.history} />
            </ExpansionPanel>
            </div>
        )
    }
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(FollowUpDetail));