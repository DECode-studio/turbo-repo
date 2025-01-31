import React from 'react';
import { Button } from '@mui/material';

const UpdateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      Update
    </Button>
  );
};

export default UpdateButton;
