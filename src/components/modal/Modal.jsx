import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

function Modal({ open, title, buttonText, handleSubmit, handleClose, children }) {
  return (
    <Dialog open={true}>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;