import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ClavienScore from './ClavienScore';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class SeriousAdverseEvent extends Component {

  state = [
    {id: null,
    clavianScore: null}
  ];

  // Called when the input field changes
  handleChangeCheckbox = (event) => {
    this.setState({
        ...this.state,
        [event.target.name]: event.target.checked,
    });
  }


  render(){

    const myOptions = this.props.reduxState.dropdownOptions.seriousAdverseEvents;
    const { classes } = this.props;

    return (
      <FormGroup row>
        {
          myOptions.map((option, index) => (
            <Grid item xs={3}>
              <FormControlLabel
              control={
                  <Checkbox
                  name={option.name}
                  checked={option.id == 3}
                  onChange={this.handleChangeCheckbox}
                  value={option.id}
                  />
              }
              label={option.sae_type}
              />
              <ClavienScore />
              </Grid>
          ))
        }
      </FormGroup>
    )
  } // end return
} // end class SeriousAdverseEvent

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(SeriousAdverseEvent));