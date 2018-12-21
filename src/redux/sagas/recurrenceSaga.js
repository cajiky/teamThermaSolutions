import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker SAGA: will be fired on 'ADD_RECURRENCE' action
// user entered a new patient .. will add a blank row for patient
function* addRecurrence(action) {
  try {
      // axios asynch call to add item on database
      yield call(axios.post, '/api/recurrence', action.payload);
  }
  catch (error) {
      console.log('error with add recurrence post request');
  }
}

// worker Saga: will be fired on "FETCH_RECURRENCE" actions
function* fetchRecurrence(action) {
  console.log('in fetch recurrence Saga', action.payload);
  try {
    const response = yield axios.get('api/recurrence/1');
    console.log('response from recurrence:', response);
    
    // set state
    yield put({ type: 'SET_RECURRENCE', payload: response.data });
  } catch (error) {
    console.log('recurrence get request failed', error);
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

function* recurrenceSaga() {
  yield takeLatest('ADD_RECURRENCE', addRecurrence);
  yield takeLatest('FETCH_RECURRENCE', fetchRecurrence);
  // yield takeLatest('DELETE_ITEM', deleteItem);
}

export default recurrenceSaga;
