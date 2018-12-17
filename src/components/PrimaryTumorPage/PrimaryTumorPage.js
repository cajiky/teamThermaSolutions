import React, { Component } from 'react'
import { connect } from 'react-redux';

class PrimaryTumorPage extends Component {


    render() {
        return(
            <div>
                <h1>Primary Tumor Page</h1>

                <h3>This is the First Tab in the Patient Profile</h3>
                <h3>The pages includes input field and dropdowns for the following:</h3>
                <h3>Primary Tumor Section, Treatment Primary, TNM Chart/Selection </h3>
                
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (PrimaryTumorPage)
