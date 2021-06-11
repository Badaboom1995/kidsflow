import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import userService from "services/user";

export const auth = createAsyncThunk<any, any>(
  "user/auth",
  async (payload, { rejectWithValue }) => {
    // let history = useHistory();
    const res = await userService.auth(payload.credentials);
    if (!res.data) return rejectWithValue("error");
    payload.history.push("/catalog");
    return res;
  }
);
