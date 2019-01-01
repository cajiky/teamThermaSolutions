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
        adjuvant_chemo: 3,
        adjuvant_chemo_type: null,
        biological: null,
        evidence_of_disease: false,
        last_contact: null,
        date_of_death: null
    };

    componentDidMount () {

        this.setState({
            id: this.props.followUp.id,
            adjuvant_chemo: this.props.followUp.adjuvant_chemo,
            adjuvant_chemo_type: this.props.followUp.adjuvant_chemo_type,
            biological: this.props.followUp.biological,
            evidence_of_disease: this.props.followUp.evidence_of_disease,
            last_contact: this.props.followUp.last_contact,
            date_of_death: this.props.followUp.date_of_death        
        })
    };
    
    addFollowUp = () => {
        // alert('Add new followup');
        this.props.dispatch({ type: 'UPDATE_FOLLOW_UP', payload: this.state})
    };

    // Called when the input field changes
    handleChange = (event) => {
        console.log('in on change', event.target.name, event.target.value)
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
                <Button onClick={this.props.addFollowUp} className={classes.button}
                            variant="contained" color="primary">
                        Save Follow Up
                    </Button>      
                    <Button className={classes.button}
                            variant="contained" color="primary">
                        New Follow Up
                    </Button>                    

                <Divider variant="middle" />
                <h3>Follow Up History</h3>
                {/* //Will have more than one -- will be mapped through */}
                <FollowUpDetail followup={this.state} addFollowUp={this.addFollowUp}
                        handleChangeCheckbox={this.handleChangeCheckbox}/>
            </div>
        )
    }
};

const mapStateToProps = reduxState => ({
    followUp: reduxState.followUp,
    followUpHistory: reduxState.followUpHistory,
});

export default connect(mapStateToProps) (withStyles(styles)(FollowUpPage));