import * as React from 'react';
import Button from '@mui/material/Button';
import {addAClothe, getAllClothes} from "../api/clothes";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ModaleAddClothes: React.FC<ModaleClothesProps> = (props) => {
  const getClothes = () => getAllClothes().then((data) => props.setClothes(data))

  const [brandFieldValue, setBrandValue] = React.useState("")
  const [sizeFieldValue, setSizeValue] = React.useState("")
  const [typeFieldValue, setTypeValue] = React.useState("")
  const [colorFieldValue, setColorValue] = React.useState("")

  const handleClose = () => {
    props.setOpenAddClothe(false);
  };

  const clickHandler = () => {
    addAClothe({
      brand: brandFieldValue,
      size: sizeFieldValue,
      type: typeFieldValue,
      color: colorFieldValue,
    }).then(() => {
      getClothes().then(r => r);
    });
    props.setOpenAddClothe(false);
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

  return (
    <>
      <Dialog open={props.openAddClothe} onClose={handleClose}>
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
    </>
  )
}

export interface ModaleClothesProps {
  openAddClothe: boolean,
  setOpenAddClothe:  (value: (((prevState: boolean) => boolean) | boolean)) => void,
  setClothes: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}