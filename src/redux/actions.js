export const setTodos = (todos) => ({
    type: 'SET_TODOS',
    payload: todos,
  });
  
  export const addData = (data) => ({
    type: 'ADD_DATA',
    payload: data,
  });
  
  export const removeData = (index) => ({
    type: 'REMOVE_DATA',
    payload: index,
  });
  
  export const fetchTodos = () => {
    return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => dispatch(setTodos(data)));
    };
  };