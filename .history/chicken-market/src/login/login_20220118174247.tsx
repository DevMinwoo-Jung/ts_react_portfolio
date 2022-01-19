import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react';

const login = () => {


  

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