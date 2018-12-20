import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker SAGA: will be fired on 'ADD_FOLLOW_UP' action
// user entered a new patient .. will add a blank row for patient
function* addFollowUp(action) {
  try {
      // axios asynch call to add item on database
      yield call(axios.post, '/api/follow_up', action.payload);
  }
  catch (error) {
      console.log('error with add follow up post request');
  }
}

// worker Saga: will be fired on "FETCH_FOLLOW_UP" actions
function* fetchFollowUp(action) {
  console.log('in fetch follow up Saga', action.payload);
  try {
    const response = yield axios.get('api/follow_up/1');
    console.log('response from follow up:', response);
    
    // set state
    yield put({ type: 'SET_FOLLOW_UP', payload: response.data });
  } catch (error) {
    console.log('follow up get request failed', error);
  }
}

// Will we ever need this? Will they remove patients?
// worker SAGA: will be fired on 'DELETE_ITEM' actions
// function* deleteItem(action) {
//   try {
//     //axios call to remove selected category
//     yield call(axios.delete, '/api/item', {params: {id: action.payload}});
//     // will need to make a call to update the list of catgories
//     yield put( { type: 'FETCH_ITEMS' } );
//   }
//   catch (error) {
//     console.log('error with delete request to /api/item');
//   } 
// }

function* itemSaga() {
  yield takeLatest('ADD_FOLLOW_UP', addFollowUp);
  yield takeLatest('FETCH_FOLLOW_UP', fetchFollowUp);
  // yield takeLatest('DELETE_ITEM', deleteItem);
}

export default itemSaga;