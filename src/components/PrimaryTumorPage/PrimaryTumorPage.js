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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


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




class PrimaryTumorPage extends Component {
    state = {

        // labelWidth: 105,
    }

    getInitialValues = (id) => {
        this.props.dispatch({type: 'GET_INITIAL_VALUES', payload: id})
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
        let patientId = document.cookie.replace(/(?:(?:^|.*;\s*)patientID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        this.getDropDownOptions();
        this.getInitialValues(patientId);
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
                        alignItems="flex-start"
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
                                    <Grid item xs={3} >
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
                                    {/* <InputLabel ref={ref => {this.InputLabelRef = ref;}} htmlFor="m-input">Input Required</InputLabel> */}

                                        <Select
                                            value={this.state.m}
                                            onChange={this.handleChange}
                                            labelWidth={this.state.labelWidth}
                                            input={
                                            <OutlinedInput
                                                value={this.state.m}
                                                name="m"
                                                id="m-input"
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
                                    {/* <InputLabel ref={ref => {this.InputLabelRef = ref;}} htmlFor="primary-location">Input Required</InputLabel> */}
                                        <Select
                                            value={this.state.n}
                                            onChange={this.handleChange}
                                            input={
                                            <OutlinedInput
                                                value={this.state.n}
                                                labelWidth={this.state.labelWidth}
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
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">M Location:</Typography>
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
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">Differentiation:</Typography>    
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true" required>
                                    <Select
                                        value={this.state.differentiation}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.differentiation}
                                            name="differentiation"
                                            id="differentiation"
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
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Mucinous</FormLabel>
                                    <RadioGroup
                                        aria-label="mucinous"
                                        name="mucinous"
                                        className={classes.group}
                                        value={this.state.mucinous}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
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
                        <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                        >
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline" >
                                    Date of Primary Surgery:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <TextField 
                                variant="outlined"
                                type="date"
                                fullWidth="true"
                                onChange={this.handleChange}
                                name="dateOfPrimarySurgery"
                                value={this.state.dateOfPrimarySurgery}
                                />
                            </Grid >
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">
                                    Intervention Type:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true">
                                    <Select
                                        value={this.state.interventionType}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.interventionType}
                                            name="interventionType"
                                            id="interventionType"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.interventionTypeOptions.map(int => (
                                            <MenuItem key={int.id} value={int.id}>{int.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">
                                    Setting:        
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true">
                                    <Select
                                        value={this.state.setting}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.setting}
                                            name="setting"
                                            id="setting"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.interventionTypeOptions.map(set => (
                                            <MenuItem key={set.id} value={set.id}>{set.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">
                                    Prime Tumor Surgery:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true">
                                    <Select
                                        value={this.state.primaryTumorSurgery}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.primaryTumorSurgery}
                                            name="primaryTumorSurgery"
                                            id="primaryTumorSurgery"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.primaryTumorSurgeryOptions.map(pts => (
                                            <MenuItem key={pts.id} value={pts.id}>{pts.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.gridItem}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Adj Chemotherapy</FormLabel>
                                    <RadioGroup
                                        aria-label="adj"
                                        name="adj"
                                        className={classes.group}
                                        value={this.state.adj}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                        <FormControlLabel value='false' control={<Radio />} label="No" />
                                        <FormControlLabel value='null' control={<Radio />} label="Unknown" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem} align="center">
                                <Typography variant="overline">
                                    Type
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem} align="center">
                                <Typography variant="overline">
                                    Biological
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem} align="center">
                                <FormControl variant="outlined" style={{width: 200}}>
                                    <Select
                                        value={this.state.type}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.type}
                                            name="type"
                                            id="type"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.adjChemoTypeOptions.map(adj => (
                                            <MenuItem key={adj.id} value={adj.id}>{adj.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem} align="center">
                                <FormControl variant="outlined" style={{width: 200}}>
                                    <Select
                                        value={this.state.biological}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.biological}
                                            name="biological"
                                            id="biological"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.reduxState.dropdownOptions.biologicalOptions.map(adj => (
                                            <MenuItem key={adj.id} value={adj.id}>{adj.status}</MenuItem> 
                                        ))} 
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.gridItem}>
                                <TextField
                                    fullWidth="true"
                                    className={classes.treatmentPrimeTumorNotes}
                                    onChange={this.handleChange}
                                    value={this.state.treatmentPrimeTumorNotes}
                                    name='treatmentPrimeTumorNotes'
                                    multiline
                                    rows="5"
                                    variant="outlined"
                                    label="Notes"
                                />
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


export default connect(mapStateToProps) (withStyles(styles)(PrimaryTumorPage))
