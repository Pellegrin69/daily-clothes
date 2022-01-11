import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const SignIn = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate()

   async function login() {
      let item = {email, password}

      let result = await fetch("http://localhost:8000/users",
         {
            method: 'POST',
            headers: {
               "Content-Type": 'application/json',
               "Accept": 'application/json'
            },
            body: JSON.stringify(item)
         })
      result = await result.json()
      localStorage.setItem("user-info", JSON.stringify(result))
      navigate("/")
   }

   return (
      <div>
         <h2>Sign In</h2>
         <Link to="/signup">Sign up</Link>

         <div className="row justify-content-center">
            <div className="col-4">

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
                  <button className="btn btn-primary" onClick={login}>Submit</button>
               </div>

            </div>
         </div>
      </div>
   );
};

export default SignIn;