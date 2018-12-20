import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';
import PatientProfileSearchResult from '../PatientProfileSearchResult/PatientProfileSearchResult';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 500,
    },
    formControlSub: {
        minWidth: 100,
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    radio: {
        display: 'inline-block',
    },
    formLabel: {
        diaplay: 'none',
    },
    button: {
        verticalAlign: 'bottom',
    }
  });

class PatientProfileSearchPage extends Component {

    setLabel() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
      }

    state = {
        variables: {
        open: false,
        labelWidth: 0,
        },
        patient: {
            
        },
        
      };
    
      handleNewPatientChange = (name) => (event) => {
        this.setState({patient: {...this.state.patient, [name]: (event.target.value)} });
        console.log(this.state);
      };

      calculateAge = (dob) => (event) => {
        let age = Math.floor((new Date() - new Date(event.target.value).getTime()) / 3.15576e+10);
        this.setState({patient: {...this.state.patient, age: age} });
        console.log(age);
        };
      

      handleSearchChange = (name) => (event) => {
        this.setState({ [name]: (event.target.value) });
        console.log(this.state.patientSearch);
      };
    
      handleClickOpen = () => {
        this.setState({ variables: {open: true} });
        this.props.dispatch({type: 'DROP_PATIENT_RESULT'});
      };
    
      handleClose = () => {
        this.setState({ variables: {open: false} });
      };

      addPatient = () => {
          this.props.dispatch({type: 'ADD_PATIENT', payload: this.state.patient});
          this.setState({ variables: {open: false}, patient: {} });
      }

      searchPatient = () => {
          if(this.state.patientSearch){
          this.setState({ patientSearch: '' });
          this.props.dispatch({type: 'FIND_PATIENT', payload: this.state.patientSearch});} else {
              alert('Please enter a Patient ID Number!');
          }
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Grid container spacing={24}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        className={classes.formControl}
                        required
                        id="outlined-required"
                        label="Search for a Patient"
                        placeholder="Patient ID e.x. 1234567890"
                        margin="normal"
                        variant="outlined"
                        value={this.state.patientSearch}
                        onChange={this.handleSearchChange('patientSearch')}
                        />
                        <Button  onClick={this.searchPatient} className={classes.button} variant="contained" color="primary">
                        Search <SearchIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        {this.props.reduxState.patientReducer.patientSearch ? (<PatientProfileSearchResult/>) : (<></>)}
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.formControl} onClick={this.handleClickOpen} variant="contained" color="primary">
                        Add New Patient<AddIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                            <Dialog
                            disableBackdropClick
                            disableEscapeKeyDown
                            open={this.state.variables.open}
                            onClose={this.handleClose}>
                            <DialogContent>
                    <FormControl className={classes.formControl}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Patient ID"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        placeholder="Patient ID e.x. 1234567890"
                        margin="normal"
                        variant="outlined"
                        fullWidth="true"
                        onChange={this.handleNewPatientChange('patientId', 'value')}
                        /></FormControl><FormControl className={classes.formControl}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Date of Birth"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        fullWidth="true"
                        onChange={this.handleNewPatientChange('dob')}
                        onBlur={this.calculateAge('age', this.state.patient.dob)}
                        /></FormControl>
                        <FormControl className={classes.formControlAge}>
                        <TextField
                        // disabled
                        id="outlined-required"
                        label="Age"
                        InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            readOnly: true,
                          }}
                          value={this.state.patient.age}
                        //   placeholder={this.state.patient.age}
                        margin="normal"
                        // type="number"
                        variant="outlined"
                        /></FormControl>
                        <FormControl  className={classes.formControlSub} variant="outlined">
                            <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-gender-simple"                                
                            >
                                {/* Gender */}
                            </InputLabel>
                            <Select
                                value={this.state.patient.gender}
                                onChange={this.handleNewPatientChange('gender', 'value')}
                                input={
                                <OutlinedInput
                                    // label="gender"
                                    // placeholder="gender"
                                    // name="gender"
                                    id="outlined-gender-simple"
                                    labelWidth={this.state.labelWidth}
                                />
                                }
                            >
                                <MenuItem value='Female'>Female</MenuItem>
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControlSub}>
                            <FormLabel component="legend" style={{display: 'inline-block'}}>HIPEC</FormLabel>
                            <RadioGroup
                                aria-label="HIPEC"
                                name="hipec"
                                value={this.state.patient.hipec}
                                onChange={this.handleNewPatientChange('hipec', 'value')}
                                style={{display: 'flex', flexDirection: 'row'}}
                            >
                                <FormControlLabel value="yes" control={<Radio className={classes.radio}/>} label="Yes" />
                                <FormControlLabel value="no" control={<Radio className={classes.radio}/>} label="No" />
                            </RadioGroup>
                        </FormControl>
                        {this.state.patient.hipec === 'yes' ? (<><FormControl className={classes.formControl}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Date of HIPEC"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        onChange={this.handleNewPatientChange('dateOfHipec', 'value')}
                        /></FormControl>
                        <FormControl className={classes.formControl}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Date of Referral"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        onChange={this.handleNewPatientChange('dateOfReferral', 'value')}
                        /></FormControl>
                        <FormControl variant="outlined">
                            <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-toc-simple"                                
                            >
                                Type of Cancer
                            </InputLabel>
                            <Select
                                value={this.state.patient.toc}
                                onChange={this.handleNewPatientChange('toc', 'value')}
                                input={
                                <OutlinedInput
                                    label="Type of Cancer"
                                    placeholder="Type of Cancer"
                                    name="Type of Cancer"
                                    id="outlined-toc-simple"
                                    labelWidth={this.state.labelWidth}
                                />
                                }
                            >
                                <MenuItem value={1}>CRC</MenuItem>
                                <MenuItem value={2}>Appendiceal</MenuItem>
                                <MenuItem value={3}>Gastric</MenuItem>
                                <MenuItem value={4}>Ovarian</MenuItem>
                                <MenuItem value={5}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Diagnosis Date"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        onChange={this.handleNewPatientChange('diagnosisDate', 'value')}
                        /></FormControl>
                        </>
                        ) : (<></>)}
                    </DialogContent>
                                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Cancel
                                </Button>
                                <Button onClick={this.addPatient} color="primary">
                                Add Patient
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>

        )
    }
  
};

PatientProfileSearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default withStyles(styles)(connect(mapStateToProps)(PatientProfileSearchPage));
