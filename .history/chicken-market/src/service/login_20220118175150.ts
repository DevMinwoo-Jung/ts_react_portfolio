import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const email:string = '';
const password:string = '';

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