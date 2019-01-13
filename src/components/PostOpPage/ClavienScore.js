import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';


const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    // fullWidth: true,
  },
});

class ClavienScore extends Component {

  renderOptions() {
    // 
    return this.props.clavienScoreOptions.map((option, i) => {
      return (
        <MenuItem
          key={i}
          value={option.id}>
          {option.score}
        </MenuItem>
      ); // end return
    }); // end map
  } // end renderTagOptions

  render(){
    const { classes } = this.props;
    // console.log('in clavian:', this.props.id)
    return (
      <FormControl>
          {/* <InputLabel htmlFor="clavien_score">Clavien</InputLabel> */}
          <Select
            // value={this.props.clavianScore}
            disabled={!this.props.checked}
            id={this.props.id}
            input={
              <Input
                  value={this.props.clavienScore}
                  name={this.props.id}
                  id={this.props.id}
              />
              }
            onChange={this.props.handleChangeClavienScore}
          >
            {this.renderOptions()}
          </Select> 
      </FormControl>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  clavienScoreOptions: reduxState.dropdownOptions.clavienScore
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ClavienScore));