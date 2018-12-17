import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFragment from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PatientProfileSearchPage from '../PatientProfileSearchPage/PatientProfileSearchPage';
import TreatmentFormPatientData from '../TreatmentFormPatientData/TreatmentFormPatientData';
import PrimaryTumorPage from '../PrimaryTumorPage/PrimaryTumorPage';
import IntakePage from '../IntakePage/IntakePage';
import PSDSSPage from '../PSDSSPage/PSDSSPage';
import InterventionPage from '../InterventionPage/InterventionPage';
import PathologyNotesPage from '../PathologyNotesPage/PathologyNotesPage';
import OperativeNotesPage from '../OperativeNotesPage/OperativeNotesPage';
import PostOpPage from '../PostOpPage/PostOpPage';
import FollowUpPage from '../FollowUpPage/FollowUpPage';
import AdditionalDataPage from '../AdditionalDataPage/AdditionalDataPage';
import ManageUsersPage from '../ManageUsersPage/ManageUsersPage';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });

class MainTabsPage extends Component {
    state = {
        value: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    render() {
    const { classes } = this.props;
    const { value } = this.state;
        return(
            <div>

                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                    >
                    </Tabs>
                </AppBar>
                <h1>Main Tabs Page</h1>
                <h3>This Page houses all the Tab Components</h3>
                <PatientProfileSearchPage />
                <TreatmentFormPatientData />
                <PrimaryTumorPage />
                <IntakePage />
                <PSDSSPage />
                <InterventionPage />
                <PathologyNotesPage />
                <OperativeNotesPage />
                <PostOpPage />
                <FollowUpPage />
                <AdditionalDataPage />
                <ManageUsersPage />




            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (MainTabsPage)