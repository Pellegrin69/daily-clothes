export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr)
  else return null
}

export const getToken = () => {
  return localStorage.getItem("token") || null;
}

const token = getToken().toString()
const url = 'http://localhost:8000/users';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem("token")}`
}

export async function sign(item, navigate, type) {

  const response = await fetch(`http://localhost:8000/${type}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    })
  const result = await response.json()
  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(result.user))
    localStorage.setItem("token", JSON.stringify(result.accessToken))
    navigate("/")
  } else {
    const error = `Error ${response.status} : ${result}`
    console.log(error)
    return Promise.reject(error)
  }
}

export const getOneUser = (userId) => {
  return fetch(`${url}/${userId}`, {method: 'GET', headers})
    .then((response) => response.json())
}

export const updateAUser = (updatedUser) => {
  return fetch(`${url}/${updatedUser.id}`, {method: 'PUT', headers, body: JSON.stringify(updatedUser)})
}

export const deleteAUser = (deletedUserID) => {
  return fetch(`${url}/${deletedUserID}`, {method: 'DELETE', headers})
}

export const removeUserSession = (navigate) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  navigate("/signin")
}