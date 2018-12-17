import React, { Component } from 'react'
import { connect } from 'react-redux';

class InterventionPage extends Component {


    render() {
        return(
            <div>
                <h1>Intervention Page</h1>

                <h3>This included the following information:</h3>
                <h3>PCI (Peritoneal Cancer Index), Resections, Anastomosis, Revision Stoma, Bloodloss, HIPEC Regiment</h3>
                
                
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (InterventionPage)
