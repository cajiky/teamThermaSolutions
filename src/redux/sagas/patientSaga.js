import axios from 'axios';
import { call, put, takeLatest, takeEvery, take, fork } from 'redux-saga/effects';

function* fetchPatient(action) {
    try {
      const response = yield call(axios.get, `/api/find-a-patient/${action.payload}`);
      yield put({ type: 'SET_PATIENT', payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log('Patient GET request failed', error);
    }
  }

function* addNewPatient(action) {
    try {
    yield call(axios.post, '/api/add-a-patient', action.payload);
}
catch (error) {
    console.log('there was an error with your POST', error);
}
}

function* patientSaga() {
  yield takeEvery('FIND_PATIENT', fetchPatient);
  yield takeEvery('ADD_PATIENT', addNewPatient);
}

export default patientSaga;
