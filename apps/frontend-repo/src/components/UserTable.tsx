"use client";

import React, { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, removeUser } from '../store/actions';
import { RootState } from '../store/store';
import UserModel from '@/service/model/user';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress, Paper, Typography, Box } from '@mui/material';

interface ComponentsProps {
  setUser: React.Dispatch<React.SetStateAction<UserModel>>;
}

const UserTable = ({ setUser }: ComponentsProps) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const { users, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (idUser: string) => {
    dispatch(removeUser(idUser));
  };

  const selectUser = (user: UserModel) => {
    setUser(user)
  }

  if (loading) return <CircularProgress sx={{ display: 'block', margin: 'auto', paddingTop: '20px' }} />;
  if (error) return <Typography color="error" align="center">Error: {error}</Typography>;

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: UserModel) => (
            <TableRow key={user.idUser}>
              <TableCell align="center">{user.idUser}</TableCell>
              <TableCell align="center">{user.nameUser}</TableCell>
              <TableCell align="center">{user.emailUser}</TableCell>
              <TableCell align="center">{user.contactUser}</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1, // Jarak antara tombol
                    marginBottom: 1, // Margin bawah untuk row
                  }}
                >
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => selectUser(user)}
                    sx={{
                      padding: 1,
                    }}
                  >
                    Select
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(user.idUser ?? '')}
                    sx={{
                      padding: 1,
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
