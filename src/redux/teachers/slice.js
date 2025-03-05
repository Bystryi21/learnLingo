import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations.js";

export const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeachers.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default slice.reducer;
