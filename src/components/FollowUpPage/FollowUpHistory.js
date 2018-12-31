import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Modality from './Modality';
import Location from './Location';
import SystemicLocation from './SystemicLocation';
import FollowUpHistoryTreatment from './FollowUpHistoryTreatment';
import Status from './Status';
import moment from 'moment';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    expanded: {
      backgroundColor: '#cccccc',
      minHeight: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    group: {
        flexDirection: 'row',
    }
});

class FollowUpHistory extends Component {
    
    render() {
        const { classes } = this.props;
        
        return(
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <h3>Recurrence Information</h3>
              {/* <FormGroup row>
                  <FormControlLabel
                  control={
                      <Checkbox
                      name="recurrence"
                      checked={this.state.recurrence}
                      onChange={this.handleChangeCheckbox}
                      value={this.state.recurrence}
                      />
                  }
                  label="Recurrence"
                  />
              </FormGroup> */}
            </Grid>
            <Grid item xs={3}>
              <TextField 
                // variant="outlined"
                label="Date of Recurrence"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                fullWidth="true"
                onChange={this.props.handleChange}
                name="date"
                value={moment(this.props.followUpHistory.date).format('YYYY-MM-DD')}
              />
            </Grid>
            <Grid item xs={3}>
            <TextField
                name="cea"
                label="CEA"
                className={classes.textField}
                value={this.props.followUpHistory.cea}
                // fullWidth
                onChange={this.props.handleChange}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                // variant="outlined"
                />
            </Grid>
            <Grid item xs={3}>
              <Modality recurrence={this.props.followUpHistory} 
                            handleChange={this.props.handleChange}
                            handleChangeCheckbox={this.props.handleChangeCheckbox}/>
            </Grid>
            <Grid item xs={12}>
                Treatment
            </Grid>
            <Grid item xs={3}>
              <TextField 
                  label="Treatment Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // variant="outlined"
                  type="date"
                  fullWidth="true"
                  onChange={this.props.handleChange}
                  name="treatment_date"
                  value={moment(this.props.followUpHistory.treatment_date).format('YYYY-MM-DD')}
                />
            </Grid>
            <Grid item xs={3}>
              <Location recurrence={this.props.followUpHistory} 
                            handleChange={this.props.handleChange}
                            handleChangeCheckbox={this.props.handleChangeCheckbox}/>
            </Grid>
            <Grid item xs={3}>
              <SystemicLocation recurrence={this.props.followUpHistory} 
                            handleChange={this.props.handleChange}
                            handleChangeCheckbox={this.props.handleChangeCheckbox}/>
            </Grid>
            <Grid item xs={3}>
              <FollowUpHistoryTreatment recurrence={this.props.followUpHistory} 
                            handleChange={this.props.handleChange}
                            handleChangeCheckbox={this.props.handleChangeCheckbox}/>
            </Grid>
            <Grid item xs={3}>
              <Status recurrence={this.props.followUpHistory} 
                            handleChange={this.props.handleChange}
                            handleChangeCheckbox={this.props.handleChangeCheckbox}/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                name="notes"
                label="Notes"
                className={classes.textField}
                value={this.props.followUpHistory.notes}
                multiline
                rows="2"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={this.props.handleChange}
                margin="normal"
                // variant="outlined"
                />
            </Grid>
          </Grid>
        )
    }
  
};

const mapStateToProps = reduxState => ({
    followUpHistory: reduxState.followUpHistory,
});

export default connect(mapStateToProps) (withStyles(styles)(FollowUpHistory));