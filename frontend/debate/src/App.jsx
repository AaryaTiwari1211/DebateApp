import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signup" exact element={<Signup/>}></Route>
          <Route path="/reset-password" exact element={<ForgotPassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
