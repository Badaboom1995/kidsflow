import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  childrenData: any[];
  userData?: any;
};

export const initialState: initialState = {
  childrenData: [{ name: "Виктория", surname: "Шуткина" }],
  userData: null,
};

const addUserFormSlice = createSlice({
  name: "addUserForm",
  initialState: initialState,
  reducers: {
    addChildData(state, { payload }) {
      state.childrenData.push(payload);
    },
  },
});

export const { addChildData } = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
