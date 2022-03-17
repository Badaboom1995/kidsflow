import { createAsyncThunk } from "@reduxjs/toolkit";
import highlightsService from "services/highlights";

export const getHighlights = createAsyncThunk<any, void>(
  "highlightsTable/get",
  async (_, { rejectWithValue }) => {
    const res = await highlightsService.getHighlights();
    if (!res) return rejectWithValue("error");
    return res;
  }
);