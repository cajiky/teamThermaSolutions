import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ReOperation from './ReoperationSelector';


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

class PostOpPage extends Component {

    state = {name: '', type: ''};

    render() {

        const { classes } = this.props;

        return(
            <div>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                <TextField
                id="outlined-name"
                label="ICU Stay (days)"
                className={classes.textField}
                value={this.state.name}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
                />
                <TextField
                id="outlined-type"
                label="Hospital Stay (days)"
                className={classes.textField}
                value={this.state.type}
                fullWidth
                // onChange={this.handleChange('name')}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />      
                
                </Grid>
                <Grid item xs>
                <TextField
                id="outlined-notes"
                label="Notes"
                className={classes.textField}
                // value={this.state.type}
                multiline
                rows="5"
                fullWidth
                // onChange={this.handleChange('name')}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />      
                
                </Grid>
                {/* <Grid item xs>
                
                </Grid> */}
            </Grid>
            <ExpansionPanel >
                <ExpansionPanelSummary >
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={false}
                        // onChange={this.handleChange('checkedA')}
                        // value="checkedA"
                        />
                    }
                    label="Serious Adverse Event"
                    />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Score</FormLabel>
                            <RadioGroup 
                                aria-label="Serious Adverse Event Score"
                                name="saeGrade"
                                className={classes.group}
                                // value={this.state.value}
                                // onChange={this.handleChange}
                            >
                                <FormControlLabel value="0" control={<Radio />} label="0" />
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>
                        <Button>Add New Event</Button>
                        </Grid>
                        <Grid>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <ReOperation />
                </Grid>
                <Grid item xs>
                </Grid>
                {/* <Grid item xs>
                
                </Grid> */}
            </Grid>
                {/* <h1>PostOp Page</h1>
                <h3>This is the PostOpPage and includes the following inputs and drowdowns</h3>
                <h3>ICU Stays, Hospital Stays, MCU Stay, Stay Notes, Serious Adverse Event, ReOperation, Hospital Mortality, Status as Discharge, Notes</h3> */}
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(PostOpPage));