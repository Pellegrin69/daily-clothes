import React from 'react';
import {useParams} from "react-router-dom";

const Profile = () => {

  const params = useParams();
  console.log(params)

  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
};

export default Profile;