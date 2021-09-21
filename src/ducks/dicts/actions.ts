import { createAsyncThunk } from "@reduxjs/toolkit";
import directionsService from "services/directions";
import organizationsService from "services/organizations";

export const getDirections = createAsyncThunk<Record<string, string>, void>(
  "dicts/getDirections",
  async (_, { rejectWithValue }) => {
    const res = await directionsService.getList(1);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getCategories = createAsyncThunk<Record<string, string>, void>(
  "dicts/getCategories",
  async (_, { rejectWithValue }) => {
    const res = await directionsService.getList(2);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getPartners = createAsyncThunk<Record<string, string>, void>(
  "dicts/getPartners",
  async (_, { rejectWithValue }) => {
    const res = await organizationsService.partnersList();
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
