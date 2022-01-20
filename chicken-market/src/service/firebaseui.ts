const firebase = require('firebase');
const firebaseui = require('firebaseui');
export const ui = new firebaseui.auth.AuthUI(firebase.auth());
