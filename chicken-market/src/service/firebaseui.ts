import firebaseui from 'firebaseui';
export const firebase = require('firebase');
export const ui = new firebaseui.auth.AuthUI(firebase.auth());
