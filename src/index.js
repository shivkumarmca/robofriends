import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello'
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    <Hello greetings={'Welcome, Shiv'}/>
  </React.StrictMode>,
  document.getElementById('root')
);
