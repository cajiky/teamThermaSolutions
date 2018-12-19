import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// const myOptions = {this.props.reduxState.adjChemoTypeOptions}

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class Biological extends Component {

  renderOptions() {
    // 
    return this.props.reduxState.dropdownOptions.biologicalOptions.map((option, i) => {
      return (
        <MenuItem
          key={i}
          value={option.id}>
          {option.status}
        </MenuItem>
      ); // end return
    }); // end map
  } // end renderTagOptions

  render(){
    const { classes } = this.props;

    return (
      <FormControl fullWidth="true" variant="outlined">
          <InputLabel htmlFor="biological">Biological</InputLabel>
          <Select fullWidth={true}
            variant="outlined" 
            value={'Yes'}
            input={
              <OutlinedInput
                  value={this.props.status_at_discharge}
                  name="biological"
                  id="biological"
              />
              }
            onChange={this.props.handleChange}
          >
            {this.renderOptions()}
          </Select> 
      </FormControl>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Biological));