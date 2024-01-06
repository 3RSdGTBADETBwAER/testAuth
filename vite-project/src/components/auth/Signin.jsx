import React, { useState } from 'react';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Corrected the variable name

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h1>Log in</h1>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='password' 
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
