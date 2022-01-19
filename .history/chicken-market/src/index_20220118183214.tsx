import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ui } from './service/firebaseui';


ReactDOM.render(
  <React.StrictMode>
    <App firebaseUi={ui} />
  </React.StrictMode>,
  document.getElementById('root')
);
