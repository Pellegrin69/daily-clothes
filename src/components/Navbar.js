import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {NavDropdown} from "react-bootstrap";
import {getUser} from "../api/user";

const Navbar = () => {

   let navigate = useNavigate()
   let user = getUser()

   const logOut = () => {
      localStorage.clear()
      navigate("/signin")
   }

   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">Daily Clothes</Link>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     {
                        user ?
                           <>
                              <li className="nav-item">
                                 <Link className="nav-link" to={"/about"}>About</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to={"/wardrobe"}>Wardrobe</Link>
                              </li>
                              <NavDropdown className="text-end" title={user && user.username}>
                                 <NavDropdown.Item>
                                    <Link className="text-decoration-none text-dark" to={`/profile/${user.id}`}>Profile</Link>
                                 </NavDropdown.Item>
                                 <NavDropdown.Item onClick={logOut}>
                                    Logout
                                 </NavDropdown.Item>
                              </NavDropdown>
                           </>
                           :
                           <>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/signin">Login</Link>
                              </li>
                           </>

                     }

                  </ul>

               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;