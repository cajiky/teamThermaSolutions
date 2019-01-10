import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';


function* GetInitalValues(action) { 
    console.log('Getting init values for primary tumor page', action.payload);
    
    try {
        yield call(axios.get, `/primaryTumor`, action.payload);
        yield put({ type: 'GET_OPERATIVE_HISTORY', payload: action.payload.userId } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}


function* primaryTumorSaga() {
  yield takeLatest('GET_INITIAL_VALUES', GetInitalValues);
  
}

export default primaryTumorSaga;