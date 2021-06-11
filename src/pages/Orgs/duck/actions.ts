import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";

export const getOrganizations = createAsyncThunk<any, any>(
  "organizations/get",
  async (page, { rejectWithValue }) => {
    const res = await organizationsService.getList(page);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
