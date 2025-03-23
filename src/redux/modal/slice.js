import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenLoginModal: false,
    isOpenRegisterModal: false,
    isOpenBookModal: false,
    bookData: null,
    passwordOpen: false,
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
    openBookModal: (state, action) => {
      state.isOpenBookModal = true;
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
      state.bookData = action.payload;
    },
    closeBookModal: (state) => {
      state.isOpenBookModal = false;
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
      state.bookData = null;
    },
    openPassword: (state) => {
      state.passwordOpen = true;
    },
    closePassword: (state) => {
      state.passwordOpen = false;
    },
    togglePassword: (state) => {
      state.passwordOpen = !state.passwordOpen;
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
  openPassword,
  closePassword,
  togglePassword,
} = modalSlice.actions;

export default modalSlice.reducer;
