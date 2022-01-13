import React, { useContext, createContext, useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "../pages/Profile";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Protected from "./Protected";
import {Wardrobe} from "../pages/Wardrobe";
import { ClothesContext, ClothesContextProvider } from "./ClothesContext";

const Routing = () => {
   return (
     <>
        <ClothesContextProvider>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/profile/:userId" element={<Protected Cmp={Profile}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/wardrobe" element={<Wardrobe/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/dashboard" element={<Protected Cmp={Dashboard}/>}/>
           </Routes>
        </ClothesContextProvider>
      </>);
};

export default Routing;