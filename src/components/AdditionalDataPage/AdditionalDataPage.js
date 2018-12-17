import React, { Component } from 'react'
import { connect } from 'react-redux';

class AdditionalDataPage extends Component {


    render() {
        return(
            <div>
                <h1>Additional Data Page</h1>
                <h3>This is the Additional Data Page and includes the following inputs and drowdowns</h3>
                <h3>Synchronous Liver Metastases (Treatment, Timing of Treatment, Date of Treatment, Treatment Type, Notes ) </h3>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (AdditionalDataPage)