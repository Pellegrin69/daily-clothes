import React, {useEffect, useState} from 'react';
import {getOneUser, getUser, removeUserSession, deleteAUser, updateAUser} from "../api/user";
import {useNavigate, useParams} from "react-router";


const Profile = () => {
  const {userId} = useParams();
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const localStorageUser = getUser();

  useEffect(() => {
    getOneUser(userId)
      .then((data) => setUser(data))
  }, [])
  const logout = () => {
    removeUserSession(navigate)
  }
  const deleteUser = () => {
    deleteAUser(localStorageUser.id)
  }

  return <div className="container-fluid">

    <h2>Profil</h2>
    {
      user &&
      <div className=".container">

        <div className="row">
          <div className="col mb-5 mt-4">
            <p className="lead">Username {user.username} </p>
          </div>
          <div className="col mb-5 mt-4">
            <p className="lead">Email {user.email}</p>

            <button type="button" className="btn btn-primary mb-3 mt-1" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
              Edit
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Change Email</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <label htmlFor="submitemail" className="mt-4 mb-4 me-4">Change your email</label>
                      <input id="submitemail" type="text" name="text" className="mt-4 mb-4"/>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary"
                              data-bs-dismiss="modal">Close
                      </button>
                      <input type="submit" onClick={updateAUser} className="btn btn-primary"
                             value="email">Confirm</input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="">
            <p className="lead">Password {user.password}</p>

            <button type="button" className="btn btn-primary mb-3 mt-1" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
              Edit
            </button>

            {/*MODAL*/}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Change Password</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <label htmlFor="submitpass" className="mt-4 mb-4 me-4">Change your password</label>
                      <input id="submitpass" type="text" name="text" className="mt-4 mb-4"/>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary"
                              data-bs-dismiss="modal">Close
                      </button>
                      <input type="submit" className="btn btn-primary" value="email">Confirm</input>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={logout} className="btn btn-danger">Logout</button>
        <button onClick={deleteUser} className="btn btn-danger ms-3">Delete the account</button>
      </div>
    }
  </div>
}


export default Profile;