import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';


function* operativeNotes(action) { 
    console.log('add operative notes action.payload', action.payload);
    
    try {
        yield call(axios.post, `/operativeNotes`, action.payload);
        // yield put({ type: 'RENDER_ALL_USERS', payload: action.payload.profileUserId } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}


function* operativeNotesSaga() {
  yield takeLatest('UPDATE_OPERATIVE_NOTE', operativeNotes);
  
}

export default operativeNotesSaga;