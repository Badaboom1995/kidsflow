import { createSlice } from "@reduxjs/toolkit";
import { v4 as makeUUID } from 'uuid';

const organizatonsSlice = createSlice({
  name: "highlights",
  initialState: {
    loading: false,
    stories: []
  },
  reducers: {
    addStory(state, { payload }) {
      state.stories.push({ id: makeUUID(), ...payload })
    },
    removeStory(state, { payload }) {
      state.stories = state.stories.filter(story => story.id !== payload)
    }
  },
  extraReducers: (builder) => { },
});

export const { addStory, removeStory } = organizatonsSlice.actions;
export default organizatonsSlice.reducer;
