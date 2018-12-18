import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    gridItem:{
        marginBottom: 30,
    },
    dropDown:{
        fullWidth: true,
    }
});




class PrimaryTumorPage extends Component {
    state = {
        dateOfPrimaryDiagnosis: '',
        primaryLocation: '',

    }

    getDropDownOptions = () => {
        this.props.dispatch({type: 'GET_DROPDOWN_OPTIONS'})
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    componentDidMount() {
        this.getDropDownOptions();
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
                        justify="space-evenly"
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
                                value={this.state.dateOfPrimaryDiagnosis}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">Primary Location:</Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true">
                                    <Select
                                        value={this.state.primaryLocation}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.primaryLocation}
                                            name="primaryLocation"
                                            id="primary-location"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.primaryLocationOptions.map(location => (
                                            <MenuItem key={location.id} value={location.id}>{location.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                                > 
                                    <Grid item xs={3}>
                                        <Typography variant="h3" align="center">
                                        T
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h3" align="center">
                                        M
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h3" align="center">
                                        N
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                                className={classes.gridItem}
                                > 
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth="true">
                                        <Select
                                            value={this.state.t}
                                            onChange={this.handleChange}
                                            input={
                                            <OutlinedInput
                                                value={this.state.t}
                                                name="t"
                                                id="primary-location"
                                            />
                                            }
                                        >
                                            {this.props.reduxState.dropdownOptions.t.map(t => (
                                                <MenuItem key={t.id} value={t.status}>{t.name}</MenuItem> 
                                            ))} 
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <FormControl variant="outlined" fullWidth="true">
                                        <Select
                                            value={this.state.m}
                                            onChange={this.handleChange}
                                            input={
                                            <OutlinedInput
                                                value={this.state.m}
                                                name="m"
                                                id="primary-location"
                                            />
                                            }
                                        >
                                            {this.props.reduxState.dropdownOptions.m.map(m => (
                                                <MenuItem key={m.id} value={m.status}>{m.name}</MenuItem> 
                                            ))} 
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <FormControl variant="outlined" fullWidth="true">
                                        <InputLabel
                                            ref={ref => {
                                            this.InputLabelRef = ref;
                                            }}
                                            htmlFor="primary-location"
                                        >
                                        Input Required
                                        </InputLabel>
                                        <Select
                                            value={this.state.n}
                                            onChange={this.handleChange}
                                            input={
                                            <OutlinedInput
                                                value={this.state.n}
                                                name="n"
                                                id="primary-location"
                                            />
                                            }
                                        >
                                            {this.props.reduxState.dropdownOptions.n.map(n => (
                                                <MenuItem key={n.id} value={n.status}>{n.name}</MenuItem> 
                                            ))} 
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="overline" className={classes.gridItem}>M Location:</Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true">
                                    <Select
                                        value={this.state.mLocation}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.mLocation}
                                            name="mLocation"
                                            id="primary-location"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.mLocationOptions.map(location => (
                                            <MenuItem key={location.id} value={location.id}>{location.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="overline" className={classes.gridItem}>Differentiation:</Typography>    
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth="true" required>
                                    <Select
                                        value={this.state.mLocation}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.mLocation}
                                            name="mLocation"
                                            id="primary-location"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.differentiationOptions.map(dif => (
                                            <MenuItem key={dif.id} value={dif.id}>{dif.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
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
