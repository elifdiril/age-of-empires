const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'GET_UNIT':
          return { ...state, loading: true };
       default:
          return state;
     }
  };
  export default reducer;
