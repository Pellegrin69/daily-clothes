import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {sign} from "../api/user"
import {useNavigate} from "react-router";

const SignUp = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

   const navigate = useNavigate()
   let item = {username, password, email}
   const submit = () => {
      sign(item, navigate, "register")
   }

   return (
      <>
         <h2 className="text-center text-primary">Sign Up</h2>

         <div className="row justify-content-center">
            <div className="col-4">

               <div className="mb-2">
                  <label htmlFor="inputUsername" className="form-label">Username</label>
                  <input type="text"
                         id="inputUsername"
                         className="form-control"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}/>
               </div>

               <div className="mb-2">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <input type="email"
                         id="inputEmail"
                         className="form-control"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}/>
               </div>

               <div className="mb-2">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <input type="password"
                         id="inputPassword"
                         className="form-control"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}/>
               </div>

               <div className="text-end">
                  <button className="btn btn-primary" onClick={submit}>Register</button>
               </div>

            </div>
         </div>
         <p className="text-center text-primary mt-3">
            Already signed up ? <Link to="/signin">Sign in</Link>.
         </p>
      </>
   );
};

export default SignUp;