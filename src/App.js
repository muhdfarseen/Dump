import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/Landing/SignIn'
import '@mantine/core/styles.css';
import SignUp from './Components/Landing/SignUp';
import Home from './Pages/Home'
import { CheckOTP } from './Components/Landing/CheckOTP';
import { app } from './firebase-config';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/otp" element={<CheckOTP />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
