const initialState = {
    todos: [],
    dataAdded: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TODOS':
        return { 
          ...state, 
           todos: action.payload
           };
      case 'ADD_DATA':
        return {
           ...state, 
           dataAdded: [...state.dataAdded, action.payload]
           };
      case 'REMOVE_DATA':
        return {
           ...state,
           dataAdded: state.dataAdded.filter((_, index) => index !== action.payload) 
          };

      default:
        return state;
    }
  };
  
  export default rootReducer;
  