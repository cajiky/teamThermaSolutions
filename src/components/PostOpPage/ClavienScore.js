import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';


const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    // fullWidth: true,
  },
});

class ClavienScore extends Component {

  renderOptions() {
    // 
    return this.props.reduxState.dropdownOptions.clavienScore.map((option, i) => {
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
      <Grid container spacing={12}>
        <GridItem item xs={12}>
          <FormControl  variant="outlined" margin="dense" className={classes.formControl}>
              {/* <InputLabel htmlFor="clavien_score">Clavien</InputLabel> */}
              {/* <GridItem item xs={6} > */}
              <Select
                // value={this.props.clavianScore}
                disabled={!this.props.checked}
                id={this.props.id}
                
                input={
                  <OutlinedInput
                    
                      value={this.props.clavianScore}
                      name={this.props.id}
                      id={this.props.id}
                  />
                  }
                onChange={this.props.handleChangeClavianScore}
              >
                {this.renderOptions()}
              </Select> 
              {/* </GridItem> */}
          </FormControl>
        </GridItem>
      </Grid>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ClavienScore));