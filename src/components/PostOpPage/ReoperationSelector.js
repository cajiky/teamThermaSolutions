import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const myOptions = [
  {id: 1, val: true, status: 'Yes'},
  {id: 2, val: false, status: 'No'},
  {id: 3, val: null, status: 'Unknown'}
]

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    // minWidth: 120,
  },
});

class ReoperationSelector extends Component {

  renderOptions() {
    // 
    return myOptions.map((option, i) => {
      return (
        <MenuItem
          key={i}
          value={option.val}>
          {option.status}
        </MenuItem>
      ); // end return
    }); // end map
  } // end renderOptions

  render(){
    const { classes } = this.props;

    return (
      <FormControl fullWidth={true} variant="outlined">
          <InputLabel htmlFor="reoperation_id">Reoperation</InputLabel>
          <Select fullWidth={true}
            variant="outlined" 
            name="reoperation"
            value={this.props.reoperation}
            input={
              <OutlinedInput
                  // labelWidth=100
                  value={this.props.reoperation}
                  name="reoperation"
                  id="reoperation"
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

export default connect(mapReduxStateToProps)(withStyles(styles)(ReoperationSelector));