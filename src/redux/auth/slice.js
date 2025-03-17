import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user.email = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
