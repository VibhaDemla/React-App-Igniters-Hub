// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import TopMenu from './components/TopMenu';
import Home from './components/Home';
import AddData from './components/AddData';
import Information from './components/Information';
import './index.css';

const App = () => (
  <Router>
    <TopMenu />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add-data" element={<AddData />} />
      <Route path="/information" element={<Information />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </Router>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
    
  </Provider>
);

