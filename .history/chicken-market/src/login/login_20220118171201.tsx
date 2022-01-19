import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react';

const login = () => {
  const email:React.MutableRefObject<undefined> = useRef();
  const password:React.MutableRefObject<undefined> = useRef();
  const auth = getAuth();
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


  

  return (
    <div>
      <form action="">
        <input type="text">{email}</input>
        <input type="text">{password}</input>
      </form>
    </div>
  );
};

export default login;