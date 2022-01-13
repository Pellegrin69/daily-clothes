import * as React from "react";
import {useContext} from "react";
import {ClothesContext} from "./ClothesContext";

export const GenerateOutfit = () => {
  const clothes = useContext(ClothesContext)
  const clothesList = clothes.clothes

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const randomArray = shuffleArray(clothesList)
  const shuffleClothesArray = randomArray.slice(Math.max(clothesList.length - 3, 0))

  return (
    <ul>
      {
        shuffleClothesArray.map((shuffleClothe, index) =>
          <div key={index} className="col-2 mb-1">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{shuffleClothe.brand}</h5>
                <h6 className="card-text">Size : {shuffleClothe.size}</h6>
                <h6 className="card-text">Type : {shuffleClothe.type}</h6>
                <h6 className="card-text">Color : {shuffleClothe.color}</h6>
              </div>
            </div>
          </div>
        )}
    </ul>
  )

}