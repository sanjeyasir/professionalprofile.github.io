import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const Overlay = ({ open, handleClose, contentTitle,content }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        height:'55%',
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '70%', 
        bgcolor: 'background.paper', 
        border: '2px solid #000', 
        boxShadow: 24, 
        p: 4,
        overflow:'auto' 
      }}>
        <Typography variant="h6" component="h2">
          {contentTitle}
        </Typography>

        <div>{content}</div>

        
        <Button onClick={handleClose} sx={{ mt: 1}}>Close</Button>
      </Box>
    </Modal>
  );
};

export default Overlay;
