import { createSlice } from '@reduxjs/toolkit';
import {
  logInUser,
  logOut,
  refreshUser,
  registerUser,
} from '../operetions/auth-operetions';

const userInitialState = {
  user: { name: '', email: '' },
  token: '',
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const userAuthSlise = createSlice({
  name: 'auth',
  initialState: userInitialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.error = payload.user.error;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, (state, { payload }) => {
        state.error = payload.user.error;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload.user.error;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = userAuthSlise.reducer;
