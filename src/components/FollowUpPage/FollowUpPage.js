import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FollowUpDetail from './FollowUpDetail';
import ChemotherapyType from './ChemotherapyType';
import AdjuvantChemotherapy from './AdjuvantChemotherapy';
import Biological from './Biological';

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
    },
    section: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
      },
});

class FollowUpPage extends Component {

    state = {
        id: 0,
        patient_id: 0,
        adjuvant_chemo: null,
        adjuvant_chemo_type: null,
        biological: null,
        evidence_of_disease: false,
        last_contact: null,
        date_of_death: null,
        follow_up_history: []
    };

    componentDidMount () {
        this.setState({
            id: this.props.followUp.id,
            patient_id: this.props.patientReducer.patient.id,
            adjuvant_chemo: this.props.followUp.adjuvant_chemo,
            adjuvant_chemo_type: this.props.followUp.adjuvant_chemo_type,
            biological: this.props.followUp.biological,
            evidence_of_disease: this.props.followUp.evidence_of_disease,
            last_contact: this.props.followUp.last_contact,
            date_of_death: this.props.followUp.date_of_death,
            follow_up_history: this.props.followUpHistory,
        })
    };
    
    updateFollowUp = () => {
        // alert('Add new followup');
        // console.log('before dispatch update followup', this.state);
        this.props.dispatch({ type: 'UPDATE_FOLLOW_UP', payload: this.state});
    };

    addFollowUpHistory = () => {
        console.log('in add followup history', this.state);
        this.props.dispatch({type: 'ADD_FOLLOW_UP_HISTORY', payload: this.state});
        this.props.dispatch({type: 'FETCH_FOLLOW_UP_HISTORY', payload: this.state.patient_id});
        // console.log('after add followup history', this.state);
        this.setState({
            ...this.state,
            follow_up_history: this.props.followUpHistory,
        });        
    }

    // Called when the input field changes
    handleChange = (event) => {
        // console.log('in on change', event.target.name, event.target.value)
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    // Called when the input field changes
    handleChangeCheckbox = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
    }
    
    render() {
        const { classes } = this.props;
        console.log('in render follow up page:', this.props.followUpHistory);
        return(
            <div>
                <h3>Follow Up Treatment Plan</h3>
                <Grid container spacing={24} className={classes.section}>
                    <Grid item xs={4}>
                    <AdjuvantChemotherapy adjuvant_chemo={this.state.adjuvant_chemo} handleChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                    <ChemotherapyType adjuvant_chemo={this.state.adjuvant_chemo} adjuvant_chemo_type={this.state.adjuvant_chemo_type} handleChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                    <Biological adjuvant_chemo={this.state.adjuvant_chemo} biological={this.state.biological} handleChange={this.handleChange} />
                    </Grid>
                </Grid>
                <Button onClick={this.updateFollowUp} className={classes.button}
                            variant="contained" color="primary">
                        Save Follow Up
                    </Button>      
                    <Button onClick={this.addFollowUpHistory} className={classes.button}
                            variant="contained" color="primary">
                        New Follow Up
                    </Button>                    

                <Divider variant="middle" />
                <h3>Follow Up History</h3>
                {
                    this.state.follow_up_history.map((history, index) => (
                        <FollowUpDetail key={index} followup={history} />
                    ))
                }
            </div>
        )
    }
};

const mapStateToProps = reduxState => ({
    followUp: reduxState.followUp,
    followUpHistory: reduxState.followUpHistory,
    patientReducer: reduxState.patientReducer,
});

export default connect(mapStateToProps) (withStyles(styles)(FollowUpPage));