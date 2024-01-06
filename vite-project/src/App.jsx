import { useState } from 'react'
import './App.css'
import Signin from './components/auth/Signin'
import Signup from './components/Signup'
import AuthDetails from './components/auth/AuthDetails'
function App() {

  return (
    <>
    <Signin></Signin>
    <Signup></Signup>
    <AuthDetails></AuthDetails>
    </>
  )
}

export default App
