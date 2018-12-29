import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker SAGA: will be fired on 'ADD_POST_OP' action
// user entered a new patient .. will add a blank row for patient
// function* addAdverseEvent(action) {
//   try {
//       // axios asynch call to add item on database
//       yield call(axios.post, '/api/adverse_event', action.payload);
//       // will need to make a call to update the list of item
//       // yield put( { type: 'FETCH_ITEMS' } );
//   }
//   catch (error) {
//       console.log('error with add adverse events post request');
//   }
// }

// worker Saga: will be fired on "FETCH_POST_OP" actions
function* fetchAdverseEvent(action) {
  console.log('in fetch adverse event Saga', action.payload);
  try {
    const response = yield axios.get('api/adverse_event/1');
    console.log('response from adverse event call :', response);
    // set state
    yield put({ type: 'SET_ADVERSE_EVENT', payload: response.data });
  } catch (error) {
    console.log('Adverse event get request failed', error);
  }
}

function* updateAdverseEvent(action) {
  console.log('in update adverse event Saga', action.payload);
  let updateQuery = '';
  let i=0;
  let events = action.payload.adverse_events.filter(function(eventIn) {
    return (eventIn.checked == true && eventIn.clavian_score != null);
  });
  // let marvelHeroes =  heroes.filter(function(hero) {
  //   return hero.franchise == “Marvel”;
  // });
  // values (1, 1, 3), (1, 3, 1), (1, 15, 3)
  // action.payload.adverse_events.forEach(element => {
  for (i = 0; i < events.length; i++) { 
    if (events[i].checked == true) { 
      console.log('i', i);
      if (events[i].clavian_score != null){
        updateQuery = updateQuery + '(' + action.payload.id + ',' +
                      events[i].id + ',' + events[i].clavian_score + ')';
        if (i < events.length - 1) {
          updateQuery = updateQuery + ','
        }
      }
    }
  };
  console.log('what to update in adverse_events table:',updateQuery);
  // try {
  //     yield call(axios.post, `/api/adverse_event`, action.payload);
  //     yield put( { type: 'FETCH_ADVERSE_EVENT' } );
  // } catch (error) {
  //     console.log(error);
  //     alert('Unable to update adverse event');
  // }
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

function* adverseEventSaga() {
  yield takeLatest('UPDATE_ADVERSE_EVENT', updateAdverseEvent);
  yield takeLatest('FETCH_ADVERSE_EVENT', fetchAdverseEvent);
  // yield takeLatest('UPDATE_ADVERSE_EVENT', updateAdverseEvent);
  // yield takeLatest('DELETE_ITEM', deleteItem);
}

export default adverseEventSaga;
