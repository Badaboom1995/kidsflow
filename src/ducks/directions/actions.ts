import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "services/user";

type credentialsType = { phoneNumber: string; password: string };

export const auth = createAsyncThunk<Record<string, string>, credentialsType>(
  "user/auth",
  async (credentials, { rejectWithValue }) => {
    const res = await userService.auth(credentials);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
