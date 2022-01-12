import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getOneUser, getUser} from "../api/user";
import {removeUserSession} from  "../api/user.js";
import {deleteAUsers} from  "../api/user.js";
import {useNavigate} from "react-router";

const Profile = () => {
  const {userId} = useParams();
  const [setUser] = useState(null)
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    getOneUser(userId)
      .then((data) => setUser(data))
  }, [])
  const logout = () => {
    removeUserSession(navigate)
  }
  const deleteuser = () => {
    deleteAUsers(user.id)
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
          <button onClick={deleteuser} className="btn btn-danger">Delete the account</button>
      </>
    }
  </>
};

export default Profile;