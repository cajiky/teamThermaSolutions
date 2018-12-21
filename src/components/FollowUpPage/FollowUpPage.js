import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
    }
});

class FollowUpPage extends Component {

    state = {
        adjuvant_chemo: false,
        adjuvant_chemo_type: null,
        biological: null,
        evidence_of_disease: false,
        last_contact: null,
        date_of_death: null
    };

    componentDidMount () {
        // this.props.dispatch({type: 'FETCH_FOLLOW_UP'});
        // const followUp = this.props.reduxState.follow_up;
        // console.log('in component mount follow up', followUp);
        console.log('in component mount follow up', this.props.reduxState.followUp);
        this.setState({
            adjuvant_chemo: this.props.reduxState.followUp.adjuvant_chemo,
            adjuvant_chemo_type: this.props.reduxState.followUp.adjuvant_chemo_type,
            biological: this.props.reduxState.followUp.biological,
            evidence_of_disease: this.props.reduxState.followUp.evidence_of_disease,
            last_contact: this.props.reduxState.followUp.last_contact,
            date_of_death: this.props.reduxState.followUp.date_of_death        
        })
    };
    
    addFollowUp = () => {
        alert('Add new followup')
    };

    // Called when the input field changes
    handleChange = (event) => {
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
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                    <AdjuvantChemotherapy chemo={this.state.adjuvant_chemo} handleChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                    <ChemotherapyType chemo_type={this.state.adjuvant_chemo_type} handleChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                    <Biological biological={this.state.biological} handleChange={this.handleChange} />
                    </Grid>
                </Grid>
            {/* //Will have more than one -- will be mapped */}
            <FollowUpDetail followup={this.state}
                    handleChangeCheckbox={this.handleChangeCheckbox}/>
            </div>
        )
    }
};

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (withStyles(styles)(FollowUpPage));