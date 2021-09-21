import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/events";

export const getEventById = createAsyncThunk<any, any>(
  "events/getEventById",
  async (id) => {
    try {
      const res = await eventsService.getById(id);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
