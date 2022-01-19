import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react';

const login = () => {
  const email = useRef() as React.MutableRefObject<HTMLInputElement>;
  const password = useRef(null);
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
      <form>
        <input  ref={email}></input>
        <input  ref={password}></input>
        <button onSubmit={login}>로그인</button>
      </form>
    </div>
  );
};

export default login;