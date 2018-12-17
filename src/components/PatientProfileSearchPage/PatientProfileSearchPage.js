import React, { Component } from 'react'
import { connect } from 'react-redux';

class PatientProfileSearchPage extends Component {


    render() {
        return(
            <div>
                <h1>Patient Profile/Search Page</h1>

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


export default connect(mapStateToProps) (PatientProfileSearchPage)
