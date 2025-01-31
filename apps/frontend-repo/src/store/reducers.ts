import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, createUser, updateUser, removeUser } from './actions';
import UserModel from '@/service/model/user';

const initialState = {
  users: [] as UserModel[],
  loading: false,
  error: null as string | null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload ?? [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching users';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.idUser === action.payload.idUser ? action.payload : user
        );
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.idUser !== action.payload);
      });
  },
});

export default userSlice.reducer;
