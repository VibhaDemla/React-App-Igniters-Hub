import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

const TopMenu = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/add-data">Add Data</NavLink>
      <NavLink to="/information">Information</NavLink>
    </nav>
  );
};

export default TopMenu;