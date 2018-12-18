import axios from 'axios';
import { call, put, takeLatest, takeEvery, take, fork } from 'redux-saga/effects';

function* addNewPatient(action) {
    try {
    yield call(axios.post, '/api/add-a-patient', action.payload);
}
catch (error) {
    console.log('there was an error with your post', error);
}
}

function* newPatientSaga() {
  yield takeEvery('ADD_PATIENT', addNewPatient);
}

export default newPatientSaga;
