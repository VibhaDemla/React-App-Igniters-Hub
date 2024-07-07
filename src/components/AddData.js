// src/components/AddData.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData } from '../redux/actions';
import './AddData.css';

const AddData = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();
  const dataAdded = useSelector(state => state.dataAdded);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && department) {
      dispatch(addData({ name, department }));
      setName('');
      setDepartment('');
    }
  };

  return (
    <div>
      <h1>Add Data</h1>
      <div style={{ display: 'flex' }}>
        <div>
          <h2>Component 1</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h2>Component 2</h2>
          <ul>
            {dataAdded.map((data, index) => (
              <li key={index}>
                {data.name} - {data.department} <button onClick={() => dispatch(removeData(index))}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddData;
