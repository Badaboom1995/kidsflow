import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import makeReducer from "utils/makeReducer";
import { v4 as makeUUID } from 'uuid';
import { addStory, createHighlight, updateHighlight, editStory } from './actions'




const initialState = {
  loading: false,
  stories: [
    {
      id: "5ed505d0-79c0-4460-acd8-a39f69a2d256",
      imageUrl: "https://cdn-dev.vzletaem.ru/images/9329c43c-a189-4a7d-a52e-f7aa5cec4456.jpeg",
      type: "1",
      order: "12",
    }
  ]
}

const organizatonsSlice = createSlice({
  name: "highlights",
  initialState,
  reducers: {
    removeStory(state, { payload }) {
      state.stories = state.stories.filter(story => story.id !== payload)
    },
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
        state.stories = []
      },
      (_, action) => {
        toast.error(action.payload || 'error');
      },
      true
    );
    makeReducer(
      builder,
      updateHighlight,
      (state) => {
        state.stories = []
      },
      () => {
        toast.error('Error');
      },
      true
    );
    makeReducer(
      builder,
      editStory,
      (state, payload) => {
        state.stories = state.stories.map(item => item.id === payload.id ? payload : item)
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
