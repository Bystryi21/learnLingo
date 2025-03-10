import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://teachers-7a7ce-default-rtdb.firebaseio.com";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(".json");
      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue();
    }
  }
);
