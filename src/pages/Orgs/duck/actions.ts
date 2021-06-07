import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";

export const getOrganizations = createAsyncThunk<any, any>(
  "organizations/get",
  async (_, { rejectWithValue }) => {
    const res = await organizationsService.getList();
    if (!res) return rejectWithValue("error");
    return res;
  }
);
