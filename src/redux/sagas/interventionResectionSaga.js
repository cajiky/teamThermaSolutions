import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';


function* interventionResection(action) { 
    console.log(' interventionResection action.payload', action.payload);
    
    try {
        yield call(axios.put, `/interventionResection/${action.payload.userId}`, action.payload);
        yield put({ type: 'GET_PCI_TOTAL', payload: action.payload.userId } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}


function* interventionSaga() {
  yield takeLatest('POST_INTERVENTION_PAGE', interventionResection);
  
}

export default interventionSaga;