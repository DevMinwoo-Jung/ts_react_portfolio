import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ui} from './service/firebaseui';

interface ui {
  ui: firebaseui.auth.AuthUI;
}

ReactDOM.render(
  <React.StrictMode>
    <App ui={ui}/>
  </React.StrictMode>,
  document.getElementById('root')
);
