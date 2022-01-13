import * as React from 'react';
import Button from '@mui/material/Button';
import {getAllClothes, updateAClothe} from "../api/clothes";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ModaleEditClothes: React.FC<ModaleEditClothesProps> = (props) => {
  const getClothes = () => getAllClothes().then((data) => props.setClothes(data))
  const handleClose = () => {
    props.setOpenEditClothe(false)
  };

  const [brandFieldValue, setBrandValue] = React.useState("")
  const [sizeFieldValue, setSizeValue] = React.useState("")
  const [typeFieldValue, setTypeValue] = React.useState("")
  const [colorFieldValue, setColorValue] = React.useState("")

  const updateClothes = (clothe) => {
    updateAClothe({
      id: clothe.id,
      brand: brandFieldValue,
      size: sizeFieldValue,
      type: typeFieldValue,
      color: colorFieldValue,
    })
      .then(() => {
        getClothes().then(r => r);
      });
    props.setOpenEditClothe(false);
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
    <Dialog open={props.openEditClothe} onClose={handleClose}>
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