import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';

// const myOptions = {this.props.reduxState.adjChemoTypeOptions}

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class ChemotherapyType extends Component {

  renderOptions() {
    // 
    return this.props.reduxState.dropdownOptions.adjChemoTypeOptions.map((option, i) => {
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
      <FormControl fullWidth="true">
          <InputLabel shrink htmlFor="adjuvant_chemo_type">Chemotherapy Type</InputLabel>
          <Select fullWidth={true}
            name="adjuvant_chemo_type"
            input={
              <Input
                  value={this.props.chemo_type}
                  name="adjuvant_chemo_type"
                  id="adjuvant_chemo_type"
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

export default connect(mapReduxStateToProps)(withStyles(styles)(ChemotherapyType));