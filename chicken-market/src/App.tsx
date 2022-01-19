import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import { ui } from './service/firebaseui';

interface firebaseUi {
  firebaseUi : typeof ui;
}

// interface ui {
//   ui: firebaseui.auth.AuthUI;
// }

function App(){
  return (
    <div className="App">
      <Login ui={ui}/>
    </div>
  );
}

export default App;
