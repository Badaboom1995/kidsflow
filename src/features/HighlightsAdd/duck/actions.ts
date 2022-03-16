import { createAsyncThunk } from "@reduxjs/toolkit";
import highlightsService from "services/highlights";

export const createStory = createAsyncThunk<any, { page: number, name?: string }>(
  "highlisghts/storyCreate",
  async (story, { rejectWithValue }) => {
    const res = await highlightsService.createStory(story);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
export const createHighlightWrapper = createAsyncThunk<any, { page: number, name?: string }>(
  "highlisghts/createWrapper",
  async (highlight, { rejectWithValue }) => {
    const res = await highlightsService.createHighlight(highlight);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
export const createHighlight = createAsyncThunk<any, { page: number, name?: string }>(
  "highlisghts/create",
  async (_, { rejectWithValue }) => {

  }
);
