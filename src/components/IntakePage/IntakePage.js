import React, { Component } from 'react'
import { connect } from 'react-redux';

class IntakePage extends Component {


    render() {
        return(
            <div>
                <h1>Intake Tab/Page</h1>

                <h3>This is the Intake Page and will display the following inputs and dropdowns:</h3>
                <h3>General Information, Neo Adjuvant treatment, Diagnostic Laparoscopy, Other Sections</h3>
                
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (IntakePage)
