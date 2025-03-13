import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenLoginModal: false,
    isOpenRegisterModal: false,
  },
  reducers: {
    openModalLogin: (state) => {
      state.isOpenLoginModal = true;
      state.isOpenRegisterModal = false;
    },
    closeModalLogin: (state) => {
      state.isOpenLoginModal = false;
    },
    openModalRegister: (state) => {
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = true;
    },
    closeModalRegister: (state) => {
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
    },
  },
});

export const {
  openModalLogin,
  closeModalLogin,
  openModalRegister,
  closeModalRegister,
} = modalSlice.actions;

export default modalSlice.reducer;
