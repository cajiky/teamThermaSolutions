import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

class PatientProfileSearchPage extends Component {
    state = {
        open: false,
        age: '',
        hipec: '',
        labelWidth: 0,
      };
    
      handleChange = (name) => (event) => {
          console.log(this.state);
        this.setState({ [name]: (event.target.value) });
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        return(
            <div>
                <h1>Patient Profile/Search Page</h1>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Search for a Patient"
                        placeholder="Patient ID e.x. 1234567890"
                        margin="normal"
                        variant="outlined"
                        />
                        <Button variant="contained" color="primary">
                        Search<SearchIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Button  onClick={this.handleClickOpen} variant="contained" color="primary">
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
                            open={this.state.open}
                            onClose={this.handleClose}>
                            <DialogContent>
                    <FormControl>
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
                        /></FormControl><FormControl>
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
                        onChange={this.handleChange('dob')}
                        /></FormControl>
                        <FormControl>
                        <p>Age:<TextField
                        required
                        id="outlined-required"
                        label="Age"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="number"
                        variant="outlined"
                        onChange={this.handleChange('age', (Date.now() - this.state.dob))}
                        /></p>
                        <FormControl variant="outlined">
                            <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-gender-simple"                                
                            >
                                {/* Gender */}
                            </InputLabel>
                            <Select
                                value={this.state.gender}
                                onChange={this.handleChange('gender', 'value')}
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
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">HIPEC</FormLabel>
                            <RadioGroup
                                aria-label="HIPEC"
                                name="hipec"
                                value={this.state.hipec}
                                onChange={this.handleChange('hipec', 'value')}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        {this.state.hipec === 'yes' ? (<><FormControl>
                        <p>Date of HIPEC:<TextField
                        required
                        id="outlined-required"
                        label="Date of HIPEC"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        onChange={this.handleChange('date-of-hipec')}
                        /></p></FormControl>
                        <FormControl>
                        <p>Date of Referral:<TextField
                        required
                        id="outlined-required"
                        label="Date of Referral"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        onChange={this.handleChange('date-of-referral')}
                        /></p></FormControl>
                        <FormControl variant="outlined">
                            <InputLabel
                                ref={ref => {
                                this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-toc-simple"                                
                            >
                                {/* Gender */}
                            </InputLabel>
                            <Select
                                value={this.state.toc}
                                onChange={this.handleChange('toc', 'value')}
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
                        <FormControl>
                        <p>Diagnosis Date:<TextField
                        required
                        id="outlined-required"
                        label="Diagnosis Date"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        onChange={this.handleChange('diagnosis-date')}
                        /></p></FormControl>
                        </>
                        ) : (<></>)}
                    </DialogContent>
                                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Cancel
                                </Button>
                                <Button onClick={this.handleClose} color="primary">
                                Add Patient
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
                <h3>Here you will have a search field</h3>
                <h3>This page will show patient profile information by id</h3>
                <h3>You can also add a new patient by clicking "add patient" and filing out the information in the popup box</h3>
                
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default withStyles(styles)(connect(mapStateToProps)(PatientProfileSearchPage));
