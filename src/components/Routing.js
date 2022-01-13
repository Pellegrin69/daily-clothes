import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Profile from "../pages/Profile";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Protected from "./Protected";

const Routing = () => {
   return <>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/signin" element={<SignIn/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/profile/:userId" element={<Protected Cmp={Profile}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="/dashboard" element={<Protected Cmp={Dashboard}/>}/>
      </Routes>
   </>;
};

export default Routing;