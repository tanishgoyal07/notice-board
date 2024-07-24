// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home/HomePage.js'; // Import HomePage component

ReactDOM.render(
  <React.StrictMode>
    <HomePage /> {/* Render HomePage as the root component */}
  </React.StrictMode>,
  document.getElementById('root')
);
