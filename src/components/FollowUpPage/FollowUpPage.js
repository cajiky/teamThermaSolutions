import React, { Component } from 'react'
import { connect } from 'react-redux';

class FollowUpPage extends Component {


    render() {
        return(
            <div>
                <h1>FollowUp Page</h1>
                <h3>This is the FollowUpPage and includes the following inputs and drowdowns</h3>
                <h3>Evidence of Disease, Last Contact, Date of Death, Follow Up Treatment, Recurrence info, FollowUp #1, FollowUp #2</h3>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (FollowUpPage)