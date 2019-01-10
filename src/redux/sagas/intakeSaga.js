import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* getInitalDataForIntake(action) {
    
    try {
        const response = yield call(axios.get, '/api/intake', action.payload);
        yield put({type: 'SET_INITAL_DATA_FOR_INTAKE', payload: response.data});
        
      }
      catch (error) {
        console.log('error in our getInitalDataForIntake', error);
      }
}



function* intakeSaga() {
  yield takeLatest('GET_INITIAL_DATA_FOR_INTAKE', getInitalDataForIntake);
}

export default getPathologyHistorySaga;