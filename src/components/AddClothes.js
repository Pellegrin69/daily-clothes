import * as React from 'react';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import {addAClothe, deleteAClothe, getAllClothes, updateAClothe} from "../api/clothes";
import "./AddClothes.css"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
      <Button variant="contained" onClick={handleClickOpen}>
        Add a clothe
      </Button>
      <Dialog open={openAddClothe} onClose={handleClose}>
        <DialogTitle>Add a new clothe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            enter your caracteristic clothe
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
          <Button onClick={clickHandler}>Add</Button>
        </DialogActions>
      </Dialog>

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
          <Button onClick={clickHandler}>Apply</Button>
        </DialogActions>
      </Dialog>

      <div className="container-fluid">
        <div className="row">
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
                      <button onClick={() => updateClickHandler(clothe)}  className="btn btn-primary">Edit</button>
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