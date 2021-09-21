import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/events";

export const getEvents = createAsyncThunk<any, any>(
  "events/get",
  async ({ page, name, status }, { rejectWithValue }) => {
    const res = await eventsService.getList(page, name, status);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
