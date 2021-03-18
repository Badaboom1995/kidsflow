import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  isOpen: boolean;
};

export const initialState: initialState = {
  isOpen: false,
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    close(state) {
      state.isOpen = false;
    },
    open(state) {
      state.isOpen = true;
    },
  },
});

export const { toggle, close, open } = contactFormSlice.actions;

export default contactFormSlice.reducer;
