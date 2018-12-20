import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TreatmentPlan from './TreatmentPlan';
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

class Recurrence extends Component {

    state = {
        adjuvant_chemo: false,
        adjuvant_chemo_type: null,
        biological: null,
        evidence_of_disease: false,
        last_contact: '',
        date_of_death: '',
        date: '10/10/1989'
    };

    componentDidMount () {
        // console.log('in component mount follow up', this.props.reduxState.postOp.serious_advese_event);
        // this.props.dispatch({type: 'FETCH_POST_OP'});
        this.setState({
            // id: this.props.reduxState.postOp.id,
        })
    }
    
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
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <FormGroup row>
                  <FormControlLabel
                  control={
                      <Checkbox
                      name="recurrence"
                      checked={this.state.recurrence}
                      onChange={this.handleChangeCheckbox}
                      value={this.state.recurrence}
                      />
                  }
                  label="Recurrence"
                  />
              </FormGroup>
            </Grid>
            <Grid item xs={3}>
              <TextField 
                variant="outlined"
                type="date"
                fullWidth="true"
                onChange={this.handleChange}
                name="date"
                value={this.state.date}
              />
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Grid>
        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(Recurrence));