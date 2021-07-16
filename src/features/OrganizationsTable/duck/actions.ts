import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";

export const getOrganizations = createAsyncThunk<any, any>(
  "organizations/get",
  async ({ page, name, status }, { rejectWithValue }) => {
    const res = await organizationsService.getList(page, name, status);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
