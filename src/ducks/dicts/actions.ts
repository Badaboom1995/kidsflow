import { createAsyncThunk } from "@reduxjs/toolkit";
import directionsService from "services/directions";
import organizationsService from "services/organizations";
type DirectionType = 'EventDirection' | 'OrganizationDirection'

export const getDirections = createAsyncThunk<Record<string, string>, DirectionType>(
  "dicts/getDirections",
  async (type, { rejectWithValue }) => {
    const res = await directionsService.getList(1, type);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getCategories = createAsyncThunk<Record<string, string>, DirectionType>(
  "dicts/getCategories",
  async (type, { rejectWithValue }) => {
    const res = await directionsService.getList(2, type);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getCategoriesHigh = createAsyncThunk<Record<string, string>, DirectionType>(
  "dicts/getCategoriesHigh",
  async (type, { rejectWithValue }) => {
    const res = await directionsService.getList(3, type);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getPartners = createAsyncThunk<Record<string, string>, DirectionType>(
  "dicts/getPartners",
  async (_, { rejectWithValue }) => {
    const res = await organizationsService.partnersList();
    if (!res.entities) return rejectWithValue("error");
    return res;
  }
);
