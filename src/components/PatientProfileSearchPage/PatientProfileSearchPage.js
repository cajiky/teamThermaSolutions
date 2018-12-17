import React, { Component } from 'react'
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
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

class PatientProfileSearchPage extends Component {
    state = {
        open: false,
        age: '',
      };
    
      handleChange = name => event => {
        this.setState({ [name]: Number(event.target.value) });
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
                        <p>Patient ID:<TextField
                        required
                        id="outlined-required"
                        label="Patient ID"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        placeholder="Patient ID e.x. 1234567890"
                        margin="normal"
                        variant="outlined"
                        /></p></FormControl><FormControl>
                        <p>Date of Birth:<TextField
                        required
                        id="outlined-required"
                        label="Date of Birth"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        type="date"
                        variant="outlined"
                        /></p></FormControl>
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
                        /></p>
                        <p>Gender:<TextField
                        // required
                        id="outlined-required"
                        label="Gender"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        margin="normal"
                        select
                        variant="outlined"
                        onChange={this.handleChange('gender')}
                        ><MenuItem value="Female" primarytext="Female" />
                        <MenuItem value="Male" primarytext="Male" />
                        <MenuItem value="Other" primarytext="Other" />
                        </TextField></p>
                        </FormControl>
                        </DialogContent>
                        <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
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


export default connect(mapStateToProps)(PatientProfileSearchPage);
