import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

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
    // const { classes } = this.props;

    return (
      <FormControl fullWidth="true" variant="outlined">
          <InputLabel shrink htmlFor="biological">Biological</InputLabel>
          <Select fullWidth={true}
            // variant="outlined" 
            // value={this.props.biological}
            input={
              <Input
                  value={this.props.biological}
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