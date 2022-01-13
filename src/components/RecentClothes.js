import * as React from "react";
import {useContext} from "react";
import {ClothesContext} from "./ClothesContext";

export const RecentClothes = () => {
  const clothes = useContext(ClothesContext)
  const clothesList = clothes.clothes
  const lastClothes = clothesList.slice(Math.max(clothesList.length - 6, 0))
  return (
    <>
      <h3 align="center" className="mb-4">your recent clothes</h3>
      <div className="container">
        <div className="row mb-4">
          {
            lastClothes.map((lastClothe, index) =>
              <div key={index} className="col-2 mb-1">
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="card-title">{lastClothe.brand}</h5>
                    <h6 className="card-text">Size : {lastClothe.size}</h6>
                    <h6 className="card-text">Type : {lastClothe.type}</h6>
                    <h6 className="card-text">Color : {lastClothe.color}</h6>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  )
}