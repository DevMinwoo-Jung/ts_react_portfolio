import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAJ_tz9FRzADjGvqmTfcjahiL1VYjQLNLw',
  authDomain: 'chicken-market-57265.firebaseapp.com',
  projectId: 'chicken-market-57265',
  storageBucket: 'chicken-market-57265.appspot.com',
  messagingSenderId: '51147924420',
  appId: '1:51147924420:web:c7bd25e6da04e5fc4fba91',
  measurementId: 'G-8TF3C8QZW4',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();
auth.languageCode = 'kr';
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
// export const firebaseAuth = firebaseApp.auth();
// export const firebaseDatabase = firebaseApp.();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const githubProvider = new firebase.auth.GithubAuthProvider();
