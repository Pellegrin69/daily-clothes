import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "../pages/Profile";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}>
          <Route path="/login/signin" element={<SignIn/>}/>
          <Route path="/login/signup" element={<SignUp/>}/>
        </Route>
        <Route path="/profile/:userId" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
};

export default Routing;