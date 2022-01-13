import { useEffect, useState} from "react";
import {createAUsers, deleteAUser, getAllUsers, updateAUser} from "../api/user";
import {Link} from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => getAllUsers().then((data) => setUsers(data))

  const clickHandler = () => {
    createAUsers({
      firstname: "John",
      lastname: "Doe",
      email: "test@test.com",
      password: "yooooo",
      age: 30
    }).then(() => {
      getUsers();
    });
  }

  const updateClickHandler = (user) => {
    updateAUser({
      id: user.id,
      firstname: "Toto",
      lastname: "Bourdon",
      email: "test@test.fr",
      password: "testset",
      age: 53
    })
      .then(() => {
        getUsers();
      });
  }

  const deleteClickHandler = (user) => {
    deleteAUser(user.id)
      .then(() => {
        getUsers();
      });
  }

  useEffect(() => {
    getUsers()
  }, []);

  return <>
    <button onClick={clickHandler}>Créer un utilisateur</button>
    <ul>
      {
        users.map((user) =>
          <li key={user.id}>
            <Link to={`user/${user.id}`}>{user.firstname} {user.lastname}</Link>
            <button type="button" onClick={() => updateClickHandler(user)}>Modifier</button>
            <button type="button" onClick={() => deleteClickHandler(user)}>Suppr</button>
          </li>)
      }
    </ul>
  </>;
}
