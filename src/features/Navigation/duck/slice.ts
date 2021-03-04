import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  isOpen: boolean;
};

export const initialState: initialState = {
  isOpen: true,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = navigationSlice.actions;

export default navigationSlice.reducer;
