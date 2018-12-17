import React, { Component } from 'react'
import { connect } from 'react-redux';

class PostOpPage extends Component {


    render() {
        return(
            <div>
                <h1>PostOp Page</h1>
                <h3>This is the PostOpPage and includes the following inputs and drowdowns</h3>
                <h3>ICU Stays, Hospital Stays, MCU Stay, Stay Notes, Serious Adverse Event, ReOperation, Hospital Mortality, Status as Discharge, Notes</h3>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (PostOpPage)