import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';


function* pathologyNotes(action) { 
    console.log('edit pathology notes action.payload', action.payload);
    
    try {
        yield call(axios.post, `/pathologyNotes`, action.payload);
        // yield put({ type: 'RENDER_ALL_USERS', payload: action.payload.profileUserId } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}


function* pathologyNotesSaga() {
  yield takeLatest('UPDATE_PATHOLOGY_NOTE', pathologyNotes);
  
}

export default pathologyNotesSaga;