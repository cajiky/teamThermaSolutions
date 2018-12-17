import { takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addNewUser(action) {
    console.log('addNewUser action', action.payload);
    
    try {
        yield call(axios.post, '/addNewUser', action.payload)

    } catch (error) {
        console.log(error);
        alert('Unable to add new user');
    }
}

function* addNewUserSaga() {
  yield takeLatest('ADD_NEW_USER', addNewUser);
  
}

export default addNewUserSaga;