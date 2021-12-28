import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <nav>
        <Link to="/login/signin">Sign in</Link>
        <Link to="/login/signup">Sign up</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Login;