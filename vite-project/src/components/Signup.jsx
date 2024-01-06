import React, { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Corrected the variable name

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='password' // Changed to type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type='submit'>Log Up</button>
      </form>
    </div>
  );
}
