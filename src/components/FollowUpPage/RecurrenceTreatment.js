import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class RecurrenceTreatment extends Component {

  renderOptions() {
    // 
    return this.props.reduxState.dropdownOptions.recTreatmentOptions.map((option, i) => {
      return (
        <MenuItem
          key={i}
          value={option.id}>
          {option.status}
        </MenuItem>
      ); // end return
    }); // end map
  } // end renderOptions

  render(){
    const { classes } = this.props;

    return (
      <FormControl fullWidth="true" variant="outlined">
          <InputLabel htmlFor="rec_treatment">Treatment</InputLabel>
          <Select fullWidth={true}
            variant="outlined" 
            value={'Yes'}
            input={
              <OutlinedInput
                  value={this.props.rec_treatment}
                  name="rec_treatment"
                  id="rec_treatment"
              />
              }
            onChange={this.props.handleChange}
          >
            {this.renderOptions()}
          </Select> 
      </FormControl>
    )
  } // end return
} // end class RecurrenceTreatment

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(RecurrenceTreatment));