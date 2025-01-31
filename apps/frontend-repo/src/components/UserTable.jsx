"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, removeUser } from '../store/actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress, Paper, Typography, Box } from '@mui/material';
const UserTable = ({ setUser }) => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const handleDelete = (idUser) => {
        dispatch(removeUser(idUser));
    };
    const selectUser = (user) => {
        setUser(user);
    };
    if (loading)
        return <CircularProgress sx={{ display: 'block', margin: 'auto', paddingTop: '20px' }}/>;
    if (error)
        return <Typography color="error" align="center">Error: {error}</Typography>;
    return (<TableContainer component={Paper} sx={{ marginTop: 2, boxShadow: 3 }}>
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
          {users.map((user) => (<TableRow key={user.idUser}>
              <TableCell align="center">{user.idUser}</TableCell>
              <TableCell align="center">{user.nameUser}</TableCell>
              <TableCell align="center">{user.emailUser}</TableCell>
              <TableCell align="center">{user.contactUser}</TableCell>
              <TableCell align="center">
                <Box sx={{
                display: 'flex',
                gap: 1, // Jarak antara tombol
                marginBottom: 1, // Margin bawah untuk row
            }}>
                  <Button variant="contained" color="warning" onClick={() => selectUser(user)} sx={{
                padding: 1,
            }}>
                    Select
                  </Button>

                  <Button variant="contained" color="error" onClick={() => handleDelete(user.idUser ?? '')} sx={{
                padding: 1,
            }}>
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>))}
        </TableBody>
      </Table>
    </TableContainer>);
};
export default UserTable;
