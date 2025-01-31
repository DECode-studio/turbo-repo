import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from '../apis/userApi';
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await userApi.getUsers();
    return response.dataResponse;
});
export const fetchUser = createAsyncThunk('user/fetchUsers', async (idUser) => {
    const response = await userApi.getUserById(idUser);
    return response.dataResponse;
});
export const createUser = createAsyncThunk('user/createUser', async (user) => {
    user.idUser = uuidv4();
    await userApi.addUser(user);
    return user;
});
export const updateUser = createAsyncThunk('user/updateUser', async (user) => {
    await userApi.editUser(user);
    return user;
});
export const removeUser = createAsyncThunk('user/removeUser', async (idUser) => {
    await userApi.deleteUser(idUser);
    return idUser;
});
