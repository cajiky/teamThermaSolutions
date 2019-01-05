import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ClavienScore from './ClavienScore';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class SeriousAdverseEvent extends Component {

  render(){

    const { classes } = this.props;

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