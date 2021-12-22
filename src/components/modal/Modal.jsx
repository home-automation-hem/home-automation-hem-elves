import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, Button, ButtonGroup,
  Container
} from '@mui/material';
import { spacing } from '@mui/system';

export default function Modal({ open, title, buttonText, handleSubmit, handleClose, children }) {
  return (
    <Dialog open={open} fullWidth={true} onClose={handleClose}>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>

      {/*<ButtonGroup variant="outlined" aria-label="outlined  button group">*/}
        <Button onClick={handleSubmit}>{buttonText}</Button>
        {/*<Button onClick={handleClose}>X</Button>*/}
      {/*</ButtonGroup>*/}
    </Dialog>
  );
}
