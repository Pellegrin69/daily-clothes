import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getOneUser} from "../api/user";

const Profile = () => {
  const {userId} = useParams();
  const [user, setUser] = useState(null)

  useEffect(() => {
    getOneUser(userId)
      .then((data) => setUser(data))
  }, [])

  return <>
    <h2>Profile</h2>
    {
      user && <>
        <p>id : {user.id}</p>
        <p>firstname : {user.firstname}</p>
        <p>lastname : {user.lastname}</p>
        <p>age : {user.age}</p>
      </>
    }
  </>
};

export default Profile;