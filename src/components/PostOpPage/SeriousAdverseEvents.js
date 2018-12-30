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

  // state = this.props.adverse_events;

  // // Called when the input field changes
  // handleChangeCheckbox = (event) => {
  //   this.setState({
  //       ...this.state,
  //       [event.target.name]: event.target.checked,
  //   });
  // }


  render(){

    // const myOptions = this.props.reduxState.dropdownOptions.seriousAdverseEvents;
    // const adverseEvents = this.props.reduxState.adverseEvents;

    const { classes } = this.props;

    console.log('passed adverse events in render of sae:', this.props.adverse_events);

    return (
      <FormGroup row>
        {
          this.props.adverse_events.map((event, index) => (
            <Grid key={index} item xs={3}>
              {/* {JSON.stringify(event)}
              {JSON.stringify(event.id)} */}
              <FormControlLabel
              control={
                  <Checkbox
                  // key={index}
                  name={event.name}
                  checked={this.props.adverse_events[index].checked}
                  onChange={this.props.handleChangeAdverseEvent}
                  value={event.id}
                  />
              }
              label={event.name}
              />
              <ClavienScore checked={event.checked} clavianScore={event.clavien_score} id={event.id}
                handleChangeClavianScore={this.props.handleChangeClavianScore}/>
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