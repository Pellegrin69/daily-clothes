import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {NavDropdown} from "react-bootstrap";

const Navbar = () => {

   let navigate = useNavigate()
   let userInfo = JSON.parse(localStorage.getItem("user-info"))

   const logOut = () => {
      localStorage.clear()
      navigate("/signin")
   }

   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">Daily Clothes</Link>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     {
                        userInfo ?
                           <>
                              <li className="nav-item">
                                 <Link className="nav-link" to={`/profile/${userInfo.user.id}`}>Profile</Link>
                              </li>
                              <NavDropdown title={userInfo && userInfo.user.username}>
                                 <NavDropdown.Item>
                                    <Link to={`/profile/${userInfo.user.id}`}>Profile</Link>
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