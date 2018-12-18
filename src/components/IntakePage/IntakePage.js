import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    gridItem:{
        marginBottom: 30,
    },
    dropDown:{
        fullWidth: true,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
});

class IntakePage extends Component {
    state = {

    }


    //Function to handle the changes in our inputs and selectors.
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        return(
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            >
            {/* Start of the fist column on the page  */}
                <Grid item xs={5}>
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >
                    {/* Start of the first section in the first column */}
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h4">
                                General Information
                            </Typography>
                        </Grid>
                        <Grid item xs={3} className={classes.gridItem}>
                            <Typography variant="overline">
                                Weight:
                            </Typography>
                        </Grid>
                        <Grid item xs={3} className={classes.gridItem}>
                            <TextField
                                onChange={this.handleChange}
                                name="patientWeight"
                                value={this.state.patientWeight}
                                id="simple-start-adornment"
                                className={classNames(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                {/* start of the second column on the page. going to contain two grid containers */}
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >
                    {/* Start of the first Section on the second column */}
                        <Grid item xs={12}>
                            <Grid 
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            >
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography variant="h4">
                                        Neo Adjuvant Treatment
                                    </Typography>
                                </Grid>
                            </Grid>
                    {/* Start of the second section in the second column */}
                            <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            >
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography variant="h4">
                                        Diagnostic Laparoscopy
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(IntakePage))
