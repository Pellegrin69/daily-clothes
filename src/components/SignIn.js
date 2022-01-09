import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <Link to="/signup">Sign up</Link>

      <div className="row justify-content-center">
        <div className="col-4">

          <div className="mb-2">
            <label htmlFor="inputUsername" className="form-label">Username</label>
            <input type="text" id="inputUsername" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" id="inputPassword" className="form-control"/>
          </div>

          <div className="text-end">
            <div className="btn-group">
              <button className="btn btn-secondary">Cancel</button>
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignIn;