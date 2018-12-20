import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input'; 
// import OutlinedInput from '@material-ui/core/OutlinedInput';

const myOptions = [
  {id: 1, val: true, status: 'Yes'},
  {id: 2, val: false, status: 'No'},
  {id: 3, val: null, status: 'Unknown'}
]

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class AdjuvantChemotherapy extends Component {

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
  } // end renderTagOptions

  render(){
    // const { classes } = this.props;

    return (
      <FormControl fullWidth="true" variant="outlined">
          <InputLabel htmlFor="adjuvant_chemo">Adjuvant Chemotherapy</InputLabel>
          <Select fullWidth={true}
            name="adjuvant_chemo"
            // variant="outlined" 
            // value={this.props.chemo}
            input={
              <Input
                  value={this.props.chemo}
                  name="adjuvant_chemo"
                  id="adjuvant_chemo"
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

export default connect(mapReduxStateToProps)(withStyles(styles)(AdjuvantChemotherapy));