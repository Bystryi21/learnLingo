import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenLoginModal: false,
    isOpenRegisterModal: false,
    isOpenBookModal: false,
  },
  reducers: {
    openModalLogin: (state) => {
      state.isOpenLoginModal = true;
      state.isOpenRegisterModal = false;
      state.isOpenBookModal = false;
    },
    closeModalLogin: (state) => {
      state.isOpenLoginModal = false;
      state.isOpenBookModal = false;
    },
    openModalRegister: (state) => {
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = true;
      state.isOpenBookModal = false;
    },
    closeModalRegister: (state) => {
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
      state.isOpenBookModal = false;
    },
    openBookModal: (state) => {
      state.isOpenBookModal = true;
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
    },
    closeBookModal: (state) => {
      state.isOpenBookModal = false;
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
  openBookModal,
  closeBookModal,
} = modalSlice.actions;

export default modalSlice.reducer;
