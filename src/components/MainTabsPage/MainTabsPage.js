import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import ManageUsersPage from '../ManageUsersPage/ManageUsersPage';
import CurrentPatientInfo from '../CurrentPatientInfo/CurrentPatientInfo';

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
    },
  });
class MainTabsPage extends Component {
state = {
    value: 0,
  };
  componentDidMount () {    
    console.log('in main tabs page for patient#', this.props.reduxState.patientReducer.patient.id);
    let patientId = this.props.reduxState.patientReducer.patient.id;
    this.props.dispatch({type: 'GET_DROPDOWN_OPTIONS'});
    this.props.dispatch({type: 'FETCH_POST_OP', payload: patientId});
    this.props.dispatch({type: 'FETCH_ADVERSE_EVENT', payload: patientId});
    this.props.dispatch({ type: 'GET_PCI_TOTAL', payload: this.props.reduxState.patientReducer.patient.id })
    // console.log('patient id:', patientId);
    // this.props.dispatch({type: 'TEST_PATIENT'});
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return(
            <div className={classes.root}>
                {/* <h1>Main Tabs Page</h1>
                <h3>This Page houses all the Tab Components</h3> */}
                {this.props.reduxState.patientReducer.patient ? (<CurrentPatientInfo/>) : (<></>)}
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                    >
                    <Tab label="Primary Tumor" />
                    <Tab label="Intake" />
                    <Tab label="PSDSS" />
                    <Tab label="Intervention" />
                    <Tab label="Pathology Notes" />
                    <Tab label="Operative Notes" />
                    <Tab label="Post-Op" />
                    <Tab label="Follow Up" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><PrimaryTumorPage /></TabContainer>}
                {value === 1 && <TabContainer><IntakePage /></TabContainer>}
                {value === 2 && <TabContainer><PSDSSPage /></TabContainer>}
                {value === 3 && <TabContainer><InterventionPage /></TabContainer>}
                {value === 4 && <TabContainer><PathologyNotesPage /></TabContainer>}
                {value === 5 && <TabContainer><OperativeNotesPage /></TabContainer>}
                {value === 6 && <TabContainer><PostOpPage /></TabContainer>}
                {value === 7 && <TabContainer><FollowUpPage /></TabContainer>}

                {/* <PatientProfileSearchPage />
                <TreatmentFormPatientData /> */}
                {/* <ManageUsersPage /> */}
            </div>

        )
    }
  
};

// ScrollableTabsButtonAuto.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(MainTabsPage))