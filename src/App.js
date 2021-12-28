import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-primary">Daily Clothes</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}>
          <Route path="/login/signin" element={<SignIn />} />
          <Route path="/login/signup" element={<SignUp />} />
        </Route>
        <Route path="/profile/:userId" element={<Profile />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
};

export default App;