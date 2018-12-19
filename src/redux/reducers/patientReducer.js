const patientReducer = (state = [], action) => {
    switch (action.type) {
      case 'FIND_PATIENT':
        return {patientSearch: action.payload};
      case 'ADD_PATIENT':
        return {patient: action.payload};
      default:
        return state;
    }
    console.log(state);
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default patientReducer;
  