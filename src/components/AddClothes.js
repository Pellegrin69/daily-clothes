import * as React from 'react';
import Button from '@mui/material/Button';
import {useContext, useEffect, useState} from "react";
import {deleteAClothe, getAllClothes} from "../api/clothes";
import {ClothesContext} from "./ClothesContext";
import {ModaleAddClothes} from "./ModaleAddClothes";
import {ModaleEditClothes} from "./ModaleEditClothes";

export const AddClothes = () => {

  const {clothes, setClothes} = useContext(ClothesContext);
  const getClothes = () => getAllClothes().then((data) => setClothes(data))

  const [currentEditClothe, setCurrentEditClothe] = useState(null);
  const [openAddClothe, setOpenAddClothe] = React.useState(false);
  const [openEditClothe, setOpenEditClothe] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAddClothe(true);
  };

  const handleEditClothe = (clothe) => {
    setOpenEditClothe(true);
    setOpenEditClothe(clothe);
    setCurrentEditClothe(clothe);
  }

  const deleteClickHandler = (clothe) => {
    deleteAClothe(clothe.id)
      .then(() => {
        getClothes().then(r => r);
      });
  }

  useEffect(() => {
    getClothes().then(r => r)
  }, []);

  return (
    <div>
      <ModaleAddClothes
        openAddClothe={openAddClothe}
        openEditClothe={openEditClothe}
        setOpenAddClothe={setOpenAddClothe}
        setOpenEditClothe={setOpenEditClothe}
        setClothes={setClothes}
      />

      <ModaleEditClothes
        currentEditClothe={currentEditClothe}
        openEditClothe={openEditClothe}
        setOpenEditClothe={setOpenEditClothe}
        setClothes={setClothes}
      />

      <div className="container">
        <div className="row">
          <h4>Add, edit and look at your clothes</h4>
          <Button variant="contained" onClick={handleClickOpen} className="mb-3 mt-3 col-12">
            Add a clothe
          </Button>
          {
            clothes.map((clothe, index) =>
              <div key={index} className="col-3 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{clothe.brand}</h5>
                    <p className="card-text">Size : {clothe.size}</p>
                    <p className="card-text">Type : {clothe.type}</p>
                    <p className="card-text">Color : {clothe.color}</p>
                    <div className="btn btn-group">
                      <button onClick={() => deleteClickHandler(clothe)} className="btn btn-danger">Delete</button>
                      <button onClick={() => handleEditClothe(clothe)}  className="btn btn-primary">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}