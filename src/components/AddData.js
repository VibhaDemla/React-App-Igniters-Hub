import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData } from '../redux/actions';
import './AddData.css';

const AddData = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const dataAdded = useSelector(state => state.dataAdded);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required!';
    if (!department) newErrors.department = 'Department is required!';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(addData({ name, department }));
      setName('');
      setDepartment('');
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Add Data</h1>
      <div className="add-data-container">
        <div className="component component1">
          <h2>Component 1</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
              {errors.department && <div className="error">{errors.department}</div>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="separator"></div>
        <div className="component component2">
          <h2>Component 2</h2>
          <ul>
            {dataAdded.map((data, index) => (
              <li key={index}>
                •  {data.name} - {data.department} <button onClick={() => dispatch(removeData(index))}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddData;
