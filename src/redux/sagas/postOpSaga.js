import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker SAGA: will be fired on 'ADD_ITEM' actions
// user entered a new item
// function* addItem(action) {
//   try {
//       // axios asynch call to add item on database
//       yield call(axios.post, '/api/item', action.payload);
//       // will need to make a call to update the list of item
//       yield put( { type: 'FETCH_ITEMS' } );
//   }
//   catch (error) {
//       console.log('error with add item post request');
//   }
// }

// worker Saga: will be fired on "FETCH_POST_OP" actions
function* fetchPostOp(action) {
  console.log('in fetch post op Saga', action.payload);
  
  try {
    const response = yield axios.get('api/post_op');
    console.log('response from post op:', response);
    
    // set state
    yield put({ type: 'SET_POST_OP', payload: response.data });
  } catch (error) {
    console.log('Post op get request failed', error);
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
  yield takeLatest('ADD_POST_OP', addItem);
  yield takeLatest('FETCH_POST_OP', fetchPostOp);
  // yield takeLatest('DELETE_ITEM', deleteItem);
}

export default itemSaga;
