import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getOneUser} from "../api/user";
import {removeUserSession} from  "../api/user.js";
import {useNavigate} from "react-router";

const Profile = () => {
  const {userId} = useParams();
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    getOneUser(userId)
      .then((data) => setUser(data))
  }, [])
  const logout = () => {
    removeUserSession(navigate)
  }
  return <>
    <h2>Profile</h2>
    {
      user && <>

        <div className=".container-fluid	">
          <div className="row">
            <div className="col">
              <p className="name">Prénom: {user.firstname} </p>
            </div>
            <div className="col">
              <p className="lastname">Nom: {user.lastname}</p>

            </div>
            <div className="col">
              <p className="age">age: {user.age}</p>

            </div>

          </div>
        </div>
          <button onClick={logout} className="btn btn-danger">Log out</button>
      </>
    }
  </>
};

export default Profile;