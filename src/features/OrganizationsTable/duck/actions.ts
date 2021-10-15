import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";

export const getOrganizations = createAsyncThunk<any, any>(
  "organizations/get",
  async ({ page, orderBy, sort }, { rejectWithValue }) => {
    const res = await organizationsService.getList({page, orderBy, sort});
    if (!res) return rejectWithValue("error");
    return res;
  }
);
