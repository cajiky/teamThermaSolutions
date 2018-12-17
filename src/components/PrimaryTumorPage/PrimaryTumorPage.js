import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const styles = theme => ({
    gridItem:{
        marginBottom: 30,
    },
});


class PrimaryTumorPage extends Component {
    state = {
        dateOfPrimaryDiagnosis: '',
        primaryLocation: '',

    }

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
            alignItems="center"
            >
                <Grid item xs={5}>
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h4">Prime Tumor</Typography>
                        </Grid>
                        <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        >
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">Date of Primary Diagnosis:</Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <TextField 
                                variant="outlined"
                                type="date"
                                fullWidth="true"
                                onChange={this.handleChange}
                                name="dateOfPrimaryDiagnosis"
                                />
                            </Grid>
                            <Grid item xs={5} className={classes.gridItem}>
                                <Typography variant="overline">Primary Location</Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                            
                            </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    style={{marginBottom: 30}}
                    >
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h4">Treatment Prime Tumor</Typography>
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


export default connect(mapStateToProps) (withStyles(styles)(PrimaryTumorPage))
