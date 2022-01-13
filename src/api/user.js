export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr)
  else return null
}

export const getToken = () => {
  return localStorage.getItem("token") || null;
}

const url = 'http://localhost:8000/users';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${getToken()}`
};
export async function sign(item, navigate, type) {
    let result = await fetch(`http://localhost:8000/${type}`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(item)
        })
    result = await result.json()
    localStorage.setItem("user", JSON.stringify(result.user))
    localStorage.setItem("token", JSON.stringify(result.accessToken))
    navigate("/")
}

export const getAllUsers = () => {
    return fetch(url, {headers})
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export const getOneUser = (userId) => {
    return fetch(`${url}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
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

export const getUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr)
    else return null
}

export const setUserSession = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
}

export const removeUserSession = (navigate) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  navigate("/signin")
}