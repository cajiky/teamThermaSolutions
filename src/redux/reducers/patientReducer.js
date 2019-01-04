const patientReducer = (state = [], action) => {
    switch (action.type) {
      case 'FIND_PATIENT':
        return {patientSearch: action.payload};
      case 'DROP_PATIENT_RESULT':
        return {patientSearch: ''};
      case 'SET_PATIENT_RESULT':
        return {patient: action.payload};
      case 'ADD_PATIENT':
        return {patient: action.payload};
      case 'LAST_PATIENT_ID_PLUS_ONE':
        return {patient: {newPatientId: action.payload}}
      case 'SET_PATIENT':
        return action.payload;
      // case 'TEST_PATIENT':
      //   return {patient:
      //           {alive_on_date: null,
      //           current_date: null,
      //           current_status: null,
      //           current_time: null,
      //           date_of_death: null,
      //           diagnosis_date: "2018-12-18T06:00:00.000Z",
      //           dob: "1962-12-01T06:00:00.000Z",
      //           gender: "Male",
      //           hipec_date: "1918-12-01T06:00:00.000Z",
      //           hospital_telephone: null,
      //           id: 4,
      //           last_contact_date: null,
      //           notes: null,
      //           patient_no: "123245356",
      //           referal_date: "2018-12-18T06:00:00.000Z",
      //           refering_doctor: null,
      //           sensor: null,
      //           toc_id: 1,
      //           user_id: null}}
      default:
        return state;
    }
    console.log(state);
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default patientReducer;
  