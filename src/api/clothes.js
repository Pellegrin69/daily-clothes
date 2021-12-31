const url = 'http://localhost:8000/clothes';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const getAllClothes = () => {
  return fetch(url, {headers})
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export const getOneClothe = (clotheId) => {
  return fetch(`${url}/${clotheId}`, {method: 'GET', headers})
    .then((response) => response.json())
}

export const addAClothe = (newClothe) => {
  return fetch(url, {method: 'POST', headers, body: JSON.stringify(newClothe)})
}

export const updateAClothe = (updatedClothe) => {
  return fetch(`${url}/${updatedClothe.id}`, {method: 'PUT', headers, body: JSON.stringify(updatedClothe)})
}

export const deleteAClothe = (deletedClotheID) => {
  return fetch(`${url}/${deletedClotheID}`, {method: 'DELETE', headers})
}
