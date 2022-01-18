import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
let email:string = '';
let password:string = '';

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });