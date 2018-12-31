import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input'; 
// import OutlinedInput from '@material-ui/core/OutlinedInput';

// const myOptions = [
//   {id: 1, val: true, status: 'Yes'},
//   {id: 2, val: false, status: 'No'},
//   {id: 3, val: null, status: 'Unknown'}
// ]

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  group: {
    flexDirection: 'row',
}
});

class AdjuvantChemotherapy extends Component {

  // renderOptions() {
  //   // 
  //   return myOptions.map((option, i) => {
  //     return (
  //       <MenuItem
  //         key={i}
  //         value={option.val}>
  //         {option.status}
  //       </MenuItem>
  //     ); // end return
  //   }); // end map
  // } // end renderTagOptions

  render(){
    const { classes } = this.props;
    console.log('chemo?', this.props.adjuvant_chemo);
    return (

      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Adjuvant Chemotherapy</FormLabel>
          <RadioGroup 
              aria-label="Adjuvant Chemotherapy"
              name="adjuvant_chemo"
              className={classes.group}
              value={this.props.adjuvant_chemo}
              onChange={this.props.handleChange}
          >
              <FormControlLabel value='1' control={<Radio />} label="Yes" />
              <FormControlLabel value='2' control={<Radio />} label="No" />
              <FormControlLabel value='3' control={<Radio />} label="Unknown" />
          </RadioGroup>
      </FormControl>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(AdjuvantChemotherapy));