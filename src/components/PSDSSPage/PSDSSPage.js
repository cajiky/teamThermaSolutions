import React, { Component } from 'react'
import { connect } from 'react-redux';

class PSDSSPage extends Component {


    render() {
        return(
            <div>
                <h1>PSDSS (Peritoneal surface disease severity scale) Tab/Page</h1>

                <h3>This page is <em>ONLY</em> relevant to CRC cancer</h3>
                <h3>The following information will be included:</h3>
                <h3>Clinical, PCI, Histology, Total, PSDSS Score, Synchronous Liver Metastases</h3>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (PSDSSPage)
