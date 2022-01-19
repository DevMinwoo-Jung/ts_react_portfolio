// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_tz9FRzADjGvqmTfcjahiL1VYjQLNLw",
  authDomain: "chicken-market-57265.firebaseapp.com",
  projectId: "chicken-market-57265",
  storageBucket: "chicken-market-57265.appspot.com",
  messagingSenderId: "51147924420",
  appId: "1:51147924420:web:c7bd25e6da04e5fc4fba91",
  measurementId: "G-8TF3C8QZW4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);