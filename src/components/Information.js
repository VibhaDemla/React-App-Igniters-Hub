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
            <li key={todo.id} className="todo-item">
              <span className="todo-id">{todo.id}.</span>
              <span className="todo-title">{todo.title}</span>
              <span className={`todo-status ${todo.completed ? 'completed' : 'pending'}`}>
                {todo.completed ? 'Completed' : 'Pending'}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Added Data</h2>
        <ul>
          {dataAdded.map((data, index) => (
            <li key={index} className="data-item">
              <span>{data.name} - {data.department}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Information;
