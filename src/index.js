import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const name = 'Hugo Mafra';
// const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  // element,
  // <h1>Hello, World!</h1>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);