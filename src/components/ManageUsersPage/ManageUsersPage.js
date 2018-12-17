import React, { Component } from 'react'
import { connect } from 'react-redux';

class ManageUsersPage extends Component {


    render() {
        return(
            <div>
                <h1>Manage Users Page</h1>
                <h3>This Page is for <em>ADMIN ONLY</em>!</h3>
                <h3>This give an Admin the ability to search, edit, and add users</h3>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (ManageUsersPage)