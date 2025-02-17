"use client";

import React, { useState, useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../store/actions';
import UserModel from '@/service/model/user';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

interface ComponentsProps {
  userToEdit?: UserModel;
}

const UserForm: React.FC<ComponentsProps> = ({ userToEdit }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  const [user, setUser] = useState<UserModel>(new UserModel(
    userToEdit?.idUser ?? '',
    userToEdit?.nameUser ?? '',
    userToEdit?.emailUser ?? '',
    userToEdit?.contactUser ?? '',
  ));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(UserModel.fromObject({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userToEdit) {
      dispatch(updateUser(user));
    } else {
      dispatch(createUser(user));
    }

    setUser(new UserModel('', '', '', ''));
  };

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [userToEdit]);

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        {userToEdit ? 'Edit User' : 'Create User'}
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="nameUser"
              value={user.nameUser}
              onChange={handleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="emailUser"
              value={user.emailUser}
              onChange={handleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact"
              name="contactUser"
              value={user.contactUser}
              onChange={handleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ padding: 1.5 }}
              onClick={handleSubmit}
            >
              {userToEdit ? 'Update User' : 'Create User'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UserForm;
