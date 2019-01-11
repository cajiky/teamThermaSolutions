import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import PatientProfileSearchPage from '../PatientProfileSearchPage/PatientProfileSearchPage';
// import TreatmentFormPatientData from '../TreatmentFormPatientData/TreatmentFormPatientData';
import PrimaryTumorPage from '../PrimaryTumorPage/PrimaryTumorPage';
import IntakePage from '../IntakePage/IntakePage';
import PSDSSPage from '../PSDSSPage/PSDSSPage';
import InterventionPage from '../InterventionPage/InterventionPage';
import PathologyNotesPage from '../PathologyNotesPage/PathologyNotesPage';
import OperativeNotesPage from '../OperativeNotesPage/OperativeNotesPage';
import PostOpPage from '../PostOpPage/PostOpPage';
import FollowUpPage from '../FollowUpPage/FollowUpPage';
// import ManageUsersPage from '../ManageUsersPage/ManageUsersPage';
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
    console.log('in main tabs page for patient#', this.props.patient);
    // this.getPatientIDFromCookie(patientId)
    let patientId = document.cookie.replace(/(?:(?:^|.*;\s*)patientID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.props.dispatch({type:'GET_PATIENT_ID_FROM_COOKIE', payload: patientId});
    this.props.dispatch({type: 'GET_DROPDOWN_OPTIONS'});
    this.props.dispatch({type: 'GET_INITIAL_VALUES', payload: patientId})
    this.props.dispatch({type: 'FETCH_POST_OP', payload: patientId});
    this.props.dispatch({type: 'FETCH_ADVERSE_EVENT', payload: patientId});
    this.props.dispatch({type: 'FETCH_FOLLOW_UP', payload: patientId});
    this.props.dispatch({type: 'FETCH_FOLLOW_UP_HISTORY', payload: patientId});
    // console.log('patient id:', patientId);
    // this.props.dispatch({type: 'TEST_PATIENT'});
    this.props.dispatch({ type: 'GET_PCI_TOTAL', payload: patientId });
    this.props.dispatch({type: 'GET_INITIAL_DATA_FOR_INTAKE', payload: patientId});
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
                {this.props.patient ? (<CurrentPatientInfo/>) : (<></>)}
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
    patient: reduxState.patientReducer.patient,
});


export default connect(mapStateToProps) (withStyles(styles)(MainTabsPage))