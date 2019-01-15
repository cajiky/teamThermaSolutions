import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import classNames from 'classnames';
// import Paper from '@material-ui/core/Paper';
// import Switch from '@material-ui/core/Switch';
// import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
import moment from 'moment';



const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
    gridItem:{
        marginBottom: 10,
    },
    dropDown:{
        // fullWidth: true,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
      table: {
        // maxWidth: 200,
        paddingBottom: 20,
      },
      headingElements:{
          marginTop: 10,
          marginBottom: 30,
      },
      containerPaper:{
          padding: 20,
      }
});

class PSDSSPage extends Component {

    render() {
        const {classes} = this.props;
        return(
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="left"
            >
            <Grid item xs={12} className={classes.gridItem}>
            <FormControlLabel
                control={
                    <Checkbox
                    name="synchronous_liver_treatment"
                    checked={this.props.psdss.synchronous_liver_treatment}
                    onChange={this.props.handleChangeCheckbox}
                    value={this.props.psdss.synchronous_liver_treatment}
                    />
                }
                label="Synchronous Liver Metastases Treatment"
            />

                {/* <Switch
                checked={this.props.psdss.synchronous_liver_treatment}
                name="synchronous_liver_treatment"
                onChange={this.props.toggleSwitch}
                value={this.props.psdss.synchronous_liver_treatment}
                /> */}
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
                <TextField 
                label="Treatment Date"
                disabled={!this.props.psdss.synchronous_liver_treatment}
                variant="outlined"
                type="date"
                dense="true"
                // fullWidth="true"
                onChange={this.props.handleChange}
                name="date_treatment"
                value={moment(this.props.psdss.date_treatment).format('YYYY-MM-DD')}
                />
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
                <FormControl variant="outlined" margin="dense" fullWidth className={classes.formControl}>
                {this.props.psdss.synchronous_liver_treatment ? <InputLabel htmlFor="timing">Timing</InputLabel> : <InputLabel htmlFor="timing">Timing (Disabled)</InputLabel>}
                    <Select
                        // align="center"
                        value={this.props.psdss.timing}
                        onChange={this.props.handleChange}
                        input={
                            <OutlinedInput
                            disabled={!this.props.psdss.synchronous_liver_treatment}
                            value={this.props.psdss.timing}
                            name="timing"
                            id="timing"
                            />
                            }
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.props.timingTreamentOptions.map(time => (
                                <MenuItem key={time.id} value={time.id}>{time.status}</MenuItem> 
                            ))} 
                    </Select>
                </FormControl>
            </Grid>
            {/* <Grid item xs={4} className={classes.gridItem} align="center">
                <Typography variant="overline">
                    Date:
                </Typography>
            </Grid> */}
            <Grid item xs={3} className={classes.gridItem}>
                <FormControl margin="dense" fullWidth variant="outlined" className={classes.formControl}>
                    {this.props.psdss.synchronous_liver_treatment ? <InputLabel htmlFor="timing">Type</InputLabel> : <InputLabel htmlFor="timing">Type (Disabled)</InputLabel>}
                    <Select
                        // align="center"
                        value={this.props.psdss.treatment_type}
                        onChange={this.props.handleChange}
                        input={
                            <OutlinedInput
                            disabled={!this.props.psdss.synchronous_liver_treatment}
                            value={this.props.psdss.treatment_type}
                            name="treatment_type"
                            id="typeSLM"
                            />
                            }
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.props.treamentTypeOptions.map(type => (
                                <MenuItem key={type.id} value={type.id}>{type.status}</MenuItem> 
                            ))} 
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}> 
                <Typography variant="overline"> </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <TextField
                    disabled={!this.props.psdss.synchronous_liver_treatment}
                    fullWidth="true"
                    className={classes.treatmentPrimeTumorNotes}
                    onChange={this.props.handleChange}
                    value={this.props.psdss.notes}
                    name='notes'
                    multiline
                    rows="5"
                    variant="outlined"
                    label={this.props.psdss.synchronous_liver_treatment ? "Notes" : "Notes (Disabled)"}
                />
            </Grid>
        </Grid>
        )
    }
};

const mapStateToProps = reduxState => ({
    timingTreamentOptions: reduxState.dropdownOptions.timingTreamentOptions,
    treamentTypeOptions: reduxState.dropdownOptions.treamentTypeOptions,
    psdss: reduxState.psdssReducer,
    // dropdownOptions: reduxState.dropdownOptions,
    patient: reduxState.patientReducer,
});

export default connect(mapStateToProps) (withStyles(styles)(PSDSSPage))
