import React, { Component } from 'react'
import { connect } from 'react-redux';

class OperativeNotesPage extends Component {


    render() {
        return(
            <div>
                <h1>Operative Notes Page</h1>
                <h3>This is a simple input form for the Operative Notes</h3>
                
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (OperativeNotesPage)