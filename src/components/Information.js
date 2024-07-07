import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions';
import './information.css';

const Information = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const dataAdded = useSelector(state => state.dataAdded);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Information</h1>
      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Added Data</h2>
        <ul>
          {dataAdded.map((data, index) => (
            <li key={index}>{data.name} - {data.department}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Information;
