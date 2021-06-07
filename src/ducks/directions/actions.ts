import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "services/user";

export const auth = createAsyncThunk<any, any>(
  "user/auth",
  async (credentials, { rejectWithValue }) => {
    const res = await userService.auth(credentials);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
