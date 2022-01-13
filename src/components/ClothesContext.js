import React, { createContext, useState, useEffect } from "react";
import {getAllClothes} from "../api/clothes";

const ClothesContext = createContext();

const ClothesContextProvider = ({ children }) => {
  const [clothes, setClothes] = useState(["no clothes in database"])
  const getClothes = () => getAllClothes().then((data) => setClothes(data))
  useEffect(() => {
    getClothes()
  }, []);


  return (
    <ClothesContext.Provider value={{clothes, setClothes}}>
      {children}
    </ClothesContext.Provider>
  )
}

export { ClothesContext, ClothesContextProvider };