import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "services/user";
type credentialsType = { phoneNumber: string; password: string };
type authPayload = { credentials: credentialsType; history: any };

export const auth = createAsyncThunk<Record<string, string>, authPayload>(
  "user/auth",
  async (payload, { rejectWithValue }) => {
    const res = await userService.auth(payload.credentials);
    if (!res.data) return rejectWithValue("error");
    payload.history.push("/catalog");
    return res;
  }
);
