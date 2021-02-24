import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  kindId: string;
  categoriesIds: string[];
};

export const initialState: initialState = {
  kindId: "1",
  categoriesIds: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    setKind(state, { payload }) {
      state.kindId = payload;
    },
    addCategory(state, { payload }) {
      state.categoriesIds.push(payload);
    },
    removeCategory(state, { payload }) {
      state.categoriesIds.filter((catId) => catId !== payload);
    },
  },
});

export const { setKind, addCategory, removeCategory } = eventsSlice.actions;

export default eventsSlice.reducer;
