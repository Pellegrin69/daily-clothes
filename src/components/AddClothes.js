import * as React from 'react';
import {useEffect, useState} from "react";
import {addAClothe, deleteAClothe, getAllClothes, updateAClothe} from "../api/clothes";
import "./AddClothes.css"

export const AddClothes = () => {

  const [brandFieldValue, setBrandValue] = React.useState("")
  const [sizeFieldValue, setSizeValue] = React.useState("")
  const [typeFieldValue, setTypeValue] = React.useState("")
  const [colorFieldValue, setColorValue] = React.useState("")
  console.log(brandFieldValue)
  console.log(sizeFieldValue)
  console.log(typeFieldValue)
  console.log(colorFieldValue)

  const handleBrandFieldChange = (e) => {
    setBrandValue(e.target.value)
  }
  const handleSizeFieldChange = (e) => {
    setSizeValue(e.target.value)
  }
  const handleTypeFieldChange = (e) => {
    setTypeValue(e.target.value)
  }
  const handleColorFieldChange = (e) => {
    setColorValue(e.target.value)
  }


  const [openAddClothe, setOpenAddClothe] = React.useState(false);
  const [openEditClothe, setOpenEditClothe] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAddClothe(true);
  };
  const handleClose = () => {
    setOpenAddClothe(false);
    setOpenEditClothe(false)
  };

  const [clothes, setClothes] = useState(["no clothes in database, add "]);
  const getClothes = () => getAllClothes().then((data) => setClothes(data))

  const clickHandler = () => {
    addAClothe({
      brand: brandFieldValue,
      size: sizeFieldValue,
      type: typeFieldValue,
      color: colorFieldValue,
    }).then(() => {
      getClothes();
    });
    setOpenAddClothe(false);
  }

  const updateClickHandler = (clothe) => {
    updateAClothe({
      id: clothe.id,
      brand: brandFieldValue,
      size: sizeFieldValue,
      type: typeFieldValue,
      color: colorFieldValue,
    })
      .then(() => {
        getClothes();
      });
    setOpenEditClothe(true);
  }

  const deleteClickHandler = (clothe) => {
    deleteAClothe(clothe.id)
      .then(() => {
        getClothes();
      });
  }

  useEffect(() => {
    getClothes()
  }, []);

  console.log(clothes)

  return (
    <div>

    </div>
  )
}