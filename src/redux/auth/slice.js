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

export default authSlice.reducer;
