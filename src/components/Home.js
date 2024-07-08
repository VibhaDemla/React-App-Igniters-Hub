import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
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
  );
};

export default Home;
