import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const SignUp = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const navigate = useNavigate()

   async function submitHandler() {
      let item = {username, password, email}

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
      console.warn("result", result)
      localStorage.setItem("user-info", JSON.stringify(result))
      navigate("/")
   }

   return (
      <>
         <h2>Sign Up</h2>
         <Link to="/signin">Sign in</Link>

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
                  <div className="btn-group">
                     <button className="btn btn-secondary" value="cancel">Cancel</button>
                     <button className="btn btn-primary" onClick={submitHandler}>Register</button>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
};

export default SignUp;