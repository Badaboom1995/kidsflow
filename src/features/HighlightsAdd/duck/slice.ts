import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import makeReducer from "utils/makeReducer";
import { v4 as makeUUID } from 'uuid';
import { addStory, createHighlight } from './actions'

const initialState = {
  loading: false,
  stories: []
}

const organizatonsSlice = createSlice({
  name: "highlights",
  initialState,
  reducers: {
    removeStory(state, { payload }) {
      state.stories = state.stories.filter(story => story.id !== payload)
    }
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      addStory,
      (state, payload) => {
        state.stories.push({ id: makeUUID(), ...payload })
      },
      () => {
        toast.error('Error');
      },
      true
    );
    makeReducer(
      builder,
      createHighlight,
      (state) => {
        console.log('hererer')
        state.stories = []
      },
      () => {
        toast.error('Error');
      },
      true
    );
  },
});

export const { removeStory } = organizatonsSlice.actions;
export default organizatonsSlice.reducer;
