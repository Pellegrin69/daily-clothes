import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneUsers} from "../api/user";

export const UserDetail = () => {
  const {userId} = useParams();
  const [user, setUser] = useState(null)

  useEffect(() => {
    getOneUsers(userId)
      .then((data) => setUser(data))
  }, [])

  return <>
    <h1>User Detail</h1>
    {
      user && <>
        <p>id : {user.id}</p>
        <p>firstname : {user.firstname}</p>
        <p>lastname : {user.lastname}</p>
        <p>age : {user.age}</p>
      </>
    }

  </>
}