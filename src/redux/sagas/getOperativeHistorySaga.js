import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* operativeHistory(action) {
    console.log('Pathology History action', action.payload);
    
    try {
        const response = yield call(axios.get, `/getOperativeHistory/${action.payload}`)
        yield put({ type: 'GET_INDIVIDUAL_OPERATIVE_HISTORY', payload: response.data })
        
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* getOperativeHistorySaga() {
  yield takeLatest('GET_OPERATIVE_HISTORY', operativeHistory);
  
}

export default getOperativeHistorySaga;