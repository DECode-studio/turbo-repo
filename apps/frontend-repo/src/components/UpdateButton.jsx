import React from 'react';
import { Button } from '@mui/material';
const UpdateButton = ({ onClick }) => {
    return (<Button variant="contained" color="secondary" onClick={onClick}>
      Update
    </Button>);
};
export default UpdateButton;
