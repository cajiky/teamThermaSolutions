import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const myOptions = [
  {id: 1, status: 'Yes'},
  {id: 2, status: 'No'},
  {id: 3, status: 'Unknown'}
]

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    // fullWidth: true,
  },
});

class MortalitySelector extends Component {

  state= { 
      ReopState: '',
  };

  renderTagOptions() {
    // 
    return myOptions.map((option, i) => {
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
      <FormControl variant="outlined" fullWidth="true" className={classes.formControl}>
          <InputLabel htmlFor="mortality_id">Hospital Mortality</InputLabel>
          <Select fullWidth={true}
            variant="outlined" 
            value={this.state.primaryLocation}
            input={
              <OutlinedInput
                  value={this.state.primaryLocation}
                  name="primaryLocation"
                  id="primary-location"
              />
              }
            // onChange={this.props.handleChange}
          >
            {this.renderTagOptions()}
          </Select> 
      </FormControl>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(MortalitySelector));