import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/kinds";

export const loadCategories = createAsyncThunk<any, void>(
  "categories/get",
  async () => {
    const res = await eventsService.getCategories();
    return res;
  }
);
