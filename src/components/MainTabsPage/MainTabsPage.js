import React, { Component } from 'react'
import { connect } from 'react-redux';

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


class MainTabsPage extends Component {


    render() {
        return(
            <div>
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