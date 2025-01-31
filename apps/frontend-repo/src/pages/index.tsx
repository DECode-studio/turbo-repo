"use client";

import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import UserModel from '@/service/model/user';

const Home: React.FC = () => {

  const [user, setUser] = useState<UserModel>(new UserModel());

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'flex-start',
        padding: 2,
        backgroundColor: 'white'
      }}
    >
      <Container maxWidth="md" sx={{ flexGrow: 1 }}>
        <Typography variant="h4" align="center" gutterBottom color='black'>
          User Management
        </Typography>
        <UserForm userToEdit={user} />
        <UserTable setUser={setUser} />
      </Container>
    </Box>
  );
};

export default Home;
