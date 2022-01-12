import React from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css"

const Navbar = () => {
  return (
    <nav>
      <ul className="liste">
        <div className="logo">
          <h1>Daily Clothes</h1>
        </div>

        <li className="items">
          <Link to="/" className="link">Home</Link>
        </li>

        <li className="items">
          <Link to="/login" className="link">Login</Link>
        </li>

        <li className="items">
          <Link to="/profile" className="link">Profile</Link>
        </li>

        <li className="items">
          <Link to="/about" className="link">About</Link>
        </li>

        <div className="iconeprofil">
          <h1>Profile</h1>
        </div>

      </ul>
      <button className="btn">BUTTON</button>
    </nav>
  );
};

export default Navbar;