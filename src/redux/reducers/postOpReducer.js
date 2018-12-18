const postOpReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POST_OP':
      return action.payload;
    default:
      return state;
  }
};

// postOp will be on the redux state at:
// state.postOp
export default postOpReducer;