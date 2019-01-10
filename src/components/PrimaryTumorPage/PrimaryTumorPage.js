import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

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
            // adj_chemotherapy: this.props.reduxState.primaryTumorReducer.adj_chemotherapy,
            // adj_chemotherapy_type: this.props.reduxState.primaryTumorReducer.adj_chemotherapy_type,
            // biological: this.props.reduxState.primaryTumorReducer.biological,
            // chemo_type_1: this.props.reduxState.primaryTumorReducer.chemo_type_1,
            // chemo_type_2: this.props.reduxState.primaryTumorReducer.chemo_type_2,
            // date_primary_diagnosis: this.props.reduxState.primaryTumorReducer.date_primary_diagnosis,
            // date_prime_surgery: this.props.reduxState.primaryTumorReducer.date_prime_surgery,
            // differentiation: this.props.reduxState.primaryTumorReducer.differentiation,
            // id: this.props.reduxState.primaryTumorReducer.id,
            // intervention_type: this.props.reduxState.primaryTumorReducer.intervention_type,
            // m: this.props.reduxState.primaryTumorReducer.m,
            // m_location: this.props.reduxState.primaryTumorReducer.m_location,
            // mucinous: this.props.reduxState.primaryTumorReducer.mucinous,
            // n: this.props.reduxState.primaryTumorReducer.n,
            // notes: this.props.reduxState.primaryTumorReducer.notes,
            // patient_id: this.props.reduxState.primaryTumorReducer.patient_id,
            // primary_location: this.props.reduxState.primaryTumorReducer.primary_location,
            // prime_tumor_surgery: this.props.reduxState.primaryTumorReducer.prime_tumor_surgery,
            // reason_acute: this.props.reduxState.primaryTumorReducer.reason_acute,
            // t: this.props.reduxState.primaryTumorReducer.t,
    };

    setValuesForPatient = () => {
        this.setState({
            adj_chemotherapy: this.props.primaryTumorReducer.adj_chemotherapy,
            adj_chemotherapy_type: this.props.primaryTumorReducer.adj_chemotherapy_type,
            biological: this.props.primaryTumorReducer.biological,
            chemo_type_1: this.props.primaryTumorReducer.chemo_type_1,
            chemo_type_2: this.props.primaryTumorReducer.chemo_type_2,
            date_primary_diagnosis: this.props.primaryTumorReducer.date_primary_diagnosis,
            date_prime_surgery: this.props.primaryTumorReducer.date_prime_surgery,
            differentiation: this.props.primaryTumorReducer.differentiation,
            id: this.props.primaryTumorReducer.id,
            intervention_type: this.props.primaryTumorReducer.intervention_type,
            m: this.props.primaryTumorReducer.m,
            m_location: this.props.primaryTumorReducer.m_location,
            mucinous: this.props.primaryTumorReducer.mucinous,
            n: this.props.primaryTumorReducer.n,
            notes: this.props.primaryTumorReducer.notes,
            patient_id: this.props.patient.id,
            primary_location: this.props.primaryTumorReducer.primary_location,
            prime_tumor_surgery: this.props.primaryTumorReducer.prime_tumor_surgery,
            reason_acute: this.props.primaryTumorReducer.reason_acute,
            t: this.props.primaryTumorReducer.t,
            setting: this.props.primaryTumorReducer.setting,
            type: this.props.primaryTumorReducer.type,
        });
    }

    updateEntriesInDB = () => {
        this.props.dispatch({type: 'UPSERT_DATA_FOR_PRIMARY_TUMOR', payload: {state: this.state, id: this.props.patient.patient.id}})
        console.log('RUNNING UPDATEENTRIESINDB Function')
    }

    getInitialValues = (id) => {
        this.props.dispatch({type: 'GET_INITIAL_VALUES', payload: id})
    }

    // getDropDownOptions = () => {
    //     this.props.dispatch({type: 'GET_DROPDOWN_OPTIONS'})
    // }
    updateReduxState = () => {
        this.props.dispatch({type: 'UPDATE_INIT_FIELDS', payload: this.state})
    }


    handleChange = (event) => {
        this.setState ({
            ...this.state,
            [event.target.name]: event.target.value,
        },this.setValuesForPatient())
        console.log(this.state);
        
    }

    componentDidMount() {
        // this.getDropDownOptions();
        this.getInitialValues();

        console.log('Inside compDidMount to check reducer status',this.props.primaryTumorReducer)
        this.setValuesForPatient();
    }

    // componentWillUnmount(){
    //     this.updateEntriesInDB()
    // }
    

    render() {
        const { classes } = this.props;
        return(
            <>
            <pre>
                {JSON.stringify(this.props.patient.id, null, 2)}
            </pre>
            <pre>
                {/* {JSON.stringify(this.props.primaryTumorReducer, null, 2)} */}
            </pre>
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
                                name="date_primary_diagnosis"
                                value={this.state.date_primary_diagnosis}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="overline">Primary Location:</Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.gridItem}>
                                <FormControl variant="outlined" fullWidth="true">
                                    <Select
                                        value={this.state.primary_location}
                                        onChange={this.handleChange}
                                        name="primary_location"
                                        input={
                                        <OutlinedInput
                                            value={this.state.primary_location}
                                            name="primary_location"
                                            id="primary_location"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.dropdownOptions.primaryLocationOptions.map(location => (
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
                                                id="t"
                                            />
                                            }
                                        >
                                            {this.props.dropdownOptions.t.map(t => (
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
                                            {this.props.dropdownOptions.m.map(m => (
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
                                            {this.props.dropdownOptions.n.map(n => (
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
                                        value={this.state.m_location}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.m_location}
                                            name="m_location"
                                            id="primary-location"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.dropdownOptions.mLocationOptions.map(location => (
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
                                        {this.props.dropdownOptions.differentiationOptions.map(dif => (
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
                                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="2" control={<Radio />} label="No" />
                                        <FormControlLabel value="3" control={<Radio />} label="Unknown" />

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
                                name="date_prime_surgery"
                                value={this.state.date_prime_surgery}
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
                                        value={this.state.intervention_type}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.intervention_type}
                                            name="intervention_type"
                                            id="interventionType"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.dropdownOptions.interventionTypeOptions.map(int => (
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
                                        {this.props.dropdownOptions.interventionTypeOptions.map(set => (
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
                                        value={this.state.prime_tumor_surgery}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.prime_tumor_surgery}
                                            name="prime_tumor_surgery"
                                            id="prime_tumor_surgery"
                                        />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.props.dropdownOptions.primaryTumorSurgeryOptions.map(pts => (
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
                                        {this.props.dropdownOptions.adjChemoTypeOptions.map(adj => (
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
                                        {this.props.dropdownOptions.biologicalOptions.map(adj => (
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
                                    value={this.state.notes}
                                    name='notes'
                                    multiline
                                    rows="5"
                                    variant="outlined"
                                    label="Notes"
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.gridItem} onClick={this.updateEntriesInDB}>
                                <Button color="primary">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </>
        )
    }
  
};

const mapStateToProps = reduxState => ({
    dropdownOptions: reduxState.dropdownOptions,
    primaryTumorReducer: reduxState.primaryTumorReducer,
    patient: reduxState.patientReducer,
});



export default connect(mapStateToProps) (withStyles(styles)(PrimaryTumorPage))
