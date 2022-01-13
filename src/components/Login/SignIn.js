import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {sign} from "../../api/user"
import Error from "./Error";

const SignIn = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [error, setError] = useState("")

   let item = {email, password}
   const navigate = useNavigate()
   const submit = () => {
      sign(item, navigate, "login")
         .then(() => {
            setError("")
         })
         .catch((error) => {
            setError(error)
         })
   }
   return (
      <>
         <h2 className="text-center text-primary">Sign In</h2>

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

               {
                  error ?
                     <div className="error my-2">
                        <Error message={error} />
                     </div>
                     : null
               }

               <div className="text-end">
                  <button className="btn btn-primary" onClick={submit}>Submit</button>
               </div>

            </div>
         </div>
         <p className="text-center text-primary mt-3">
            Don't have an account yet ? <Link to="/signup">Sign up</Link>.
         </p>
      </>
   );
};

export default SignIn;