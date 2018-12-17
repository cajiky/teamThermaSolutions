import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const myOptions = [
  {id: 1, status: 'Death of Disease'},
  {id: 2, status: 'Alive with Disease'},
  {id: 3, status: 'No Evidence of Disease'},
  {id: 4, status: 'Treatment Related Death'}
];

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    // minWidth: 120,
  },
});

class DischargeStatus extends Component {

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
      <FormControl fullWidth="true" variant="outlined">
          <InputLabel htmlFor="reoperation_id">Discharge Status</InputLabel>
          <Select fullWidth={true}
            variant="outlined" 
            value={this.state.dischargeStatus}
            input={
              <OutlinedInput
                  value={this.state.reoperation}
                  name="dischargeStatus"
                  id="dischargeStatus"
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

export default connect(mapReduxStateToProps)(withStyles(styles)(DischargeStatus));