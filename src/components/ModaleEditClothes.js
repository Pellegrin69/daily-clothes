import * as React from 'react';
import Button from '@mui/material/Button';
import {getAllClothes, updateAClothe} from "../api/clothes";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";

export const ModaleEditClothes: React.FC<ModaleEditClothesProps> = ({setClothes, setOpenEditClothe, openEditClothe, currentEditClothe}) => {
  const getClothes = () => getAllClothes().then((data) => setClothes(data))
  const handleClose = () => {
    setOpenEditClothe(false)
  };

  const [brandFieldValue, setBrandValue] = useState("")
  const [sizeFieldValue, setSizeValue] = useState("")
  const [typeFieldValue, setTypeValue] = useState("")
  const [colorFieldValue, setColorValue] = useState("")

  const updateClothes = () => {
    updateAClothe({
      id: currentEditClothe.id,
      brand: brandFieldValue,
      size: sizeFieldValue,
      type: typeFieldValue,
      color: colorFieldValue,
    })
      .then(() => {
        getClothes().then(r => r);
      })
      .finally(() => setOpenEditClothe(false));
  }

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

  useEffect(() => {
    if (currentEditClothe) {
      setBrandValue(currentEditClothe.brand);
      setSizeValue(currentEditClothe.size);
      setTypeValue(currentEditClothe.type);
      setColorValue(currentEditClothe.color);
    }
  }, [currentEditClothe])

  return (
    <Dialog open={openEditClothe} onClose={handleClose}>
      <DialogTitle>Edit your close</DialogTitle>
      <DialogContent>
        <DialogContentText>
          enter your new caracteristic clothe
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="brand"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="false"
          value={brandFieldValue}
          onChange={handleBrandFieldChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="size"
          type="text"
          fullWidth
          variant="standard"
          value={sizeFieldValue}
          onChange={handleSizeFieldChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="type"
          type="text"
          fullWidth
          variant="standard"
          value={typeFieldValue}
          onChange={handleTypeFieldChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="color"
          type="text"
          fullWidth
          variant="standard"
          value={colorFieldValue}
          onChange={handleColorFieldChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={updateClothes}>Apply</Button>
      </DialogActions>
    </Dialog>
  )
}

export interface ModaleEditClothesProps {
  openEditClothe: boolean,
  setOpenEditClothe:  (value: (((prevState: boolean) => boolean) | boolean)) => void,
  setClothes: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}