import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addNewUser(action) {
    console.log('addNewUser action', action.payload);
    
    try {
        yield call(axios.post, '/addNewUser', action.payload)
        yield put({ type: 'RENDER_ALL_USERS' })

    } catch (error) {
        console.log(error);
        alert('Unable to add new user');
    }
}

function* addNewUserSaga() {
  yield takeLatest('ADD_NEW_USER', addNewUser);
  
}

export default addNewUserSaga;