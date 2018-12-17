import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class PatientProfileSearchPage extends Component {


    render() {
        return(
            <div>
                <h1>Patient Profile/Search Page</h1>
                <TextField
                required
                id="outlined-required"
                label="Search for a Patient"
                defaultValue="Patient ID e.x. 1234567890"
                margin="normal"
                variant="outlined"
                />
                <Button variant="contained" color="primary">
                Search<SearchIcon/>
                </Button>
                <Button variant="contained" color="primary">
                Add a Patient<AddIcon/>
                </Button>
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
