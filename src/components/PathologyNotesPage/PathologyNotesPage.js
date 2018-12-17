import React, { Component } from 'react'
import { connect } from 'react-redux';

class PathologyNotesPage extends Component {


    render() {
        return(
            <div>
                <h1>Pathology Notes Page</h1>
                <h3>This is a simple input form for the Pathology Notes</h3>
                
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (PathologyNotesPage)
