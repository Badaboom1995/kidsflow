import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/events";

export const getEvents = createAsyncThunk<any, { page: number, name?: string }>(
  "events/get",
  async ({ page, name }, { rejectWithValue }) => {
    const res = await eventsService.getList({ page, name });
    if (!res) return rejectWithValue("error");
    return res;
  }
);
