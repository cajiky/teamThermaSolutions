import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';


function* getInitalValues(action) { 
    console.log('Getting init values for primary tumor page', action.payload);
    
    try {
        const response = yield call(axios.post, `/api/primaryTumor/getDataFor`, {id: action.payload});
        yield put({ type: 'SET_INIT_VALUES', payload: response.data } )

    } catch (error) {
        console.log(error);
    }
}


function* primaryTumorSaga() {
  yield takeLatest('GET_INITIAL_VALUES', getInitalValues);
  
}

export default primaryTumorSaga;