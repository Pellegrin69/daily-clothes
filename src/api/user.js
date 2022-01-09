const url = 'http://localhost:8000/users';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const getAllUsers = () => {

  return fetch(url, {headers})
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export const getOneUser = (userId) => {
  return fetch(`${url}/${userId}`, {method: 'GET', headers})
    .then((response) => response.json())
}

export const createAUser = (newUser) => {
  return fetch(url, {method: 'POST', headers, body: JSON.stringify(newUser)})
}

export const updateAUsers = (updatedUser) => {
  return fetch(`${url}/${updatedUser.id}`, {method: 'PUT', headers, body: JSON.stringify(updatedUser)})
}

export const deleteAUsers = (deletedUserID) => {
  return fetch(`${url}/${deletedUserID}`, {method: 'DELETE', headers})
}
