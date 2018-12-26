import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker SAGA: will be fired on 'ADD_POST_OP' action
// user entered a new patient .. will add a blank row for patient
function* addAdverseEvent(action) {
  try {
      // axios asynch call to add item on database
      yield call(axios.post, '/api/adverse_event', action.payload);
      // will need to make a call to update the list of item
      // yield put( { type: 'FETCH_ITEMS' } );
  }
  catch (error) {
      console.log('error with add adverse events post request');
  }
}

// worker Saga: will be fired on "FETCH_POST_OP" actions
function* fetchAdverseEvent(action) {
  // console.log('in fetch post op Saga', action.payload);
  try {
    const response = yield axios.get('api/adverse_event/1');
    console.log('response from adverse event call :', response);
    // set state
    yield put({ type: 'SET_ADVERSE_EVENT', payload: response.data });
  } catch (error) {
    console.log('Adverse event get request failed', error);
  }
}

function* updatePostOp(action) {
  console.log('in update follow up Saga', action.payload);
  try {
      yield call(axios.put, `/api/post_op`, action.payload);
      yield put( { type: 'FETCH_POST_OP' } );
  } catch (error) {
      console.log(error);
      alert('Unable to update post op');
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

function* postOpSaga() {
  yield takeLatest('ADD_ADVERSE_EVENT', addAdverseEvent);
  yield takeLatest('FETCH_ADVERSE_EVENT', fetchAdverseEvent);
  yield takeLatest('UPDATE_ADVERSE_EVENT', updateAdverseEvent);
  // yield takeLatest('DELETE_ITEM', deleteItem);
}

export default postOpSaga;
