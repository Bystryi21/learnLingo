import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://test-dfa2b-default-rtdb.firebaseio.com/";

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
