import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* getInitalDataForIntake(action) { 
    console.log('Getting init values for intake page', action.payload);
    
    try {
        const response = yield call(axios.post, `/api/intake/getDataFor`, {id: 1});
        yield put({ type: 'SET_INIT_VALUES', payload: response.data } )

    } catch (error) {
        console.log(error);
    }
}



function* intakeSaga() {
  yield takeLatest('GET_INITIAL_DATA_FOR_INTAKE', getInitalDataForIntake);
}

export default intakeSaga;