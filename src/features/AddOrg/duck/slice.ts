import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  formRef?: any;
  uploadIds: string[];
  direction?: string;
};

export const initialState: initialState = {
  formRef: null,
  uploadIds: [],
  direction: null,
};

const addUserFormSlice = createSlice({
  name: "addOrg",
  initialState: initialState,
  reducers: {
    addFormRef(state, { payload }) {
      state.formRef = payload;
    },
    addUploadId(state, { payload }) {
      console.log(payload);
      state.uploadIds.push(payload);
    },
    removeUploadIds(state) {
      state.uploadIds = [];
    },
    chooseDirection(state, { payload }) {
      state.direction = payload;
    },
  },
});

export const {
  addFormRef,
  addUploadId,
  chooseDirection,
  removeUploadIds,
} = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
