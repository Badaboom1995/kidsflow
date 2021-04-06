import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  formRef?: any;
};

export const initialState: initialState = {
  formRef: null,
};

const addUserFormSlice = createSlice({
  name: "addOrg",
  initialState: initialState,
  reducers: {
    addFormRef(state, { payload }) {
      state.formRef = payload;
    },
  },
});

export const { addFormRef } = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
