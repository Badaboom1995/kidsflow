import { createSlice } from "@reduxjs/toolkit";

type InititalState = {
  search: string;
};

const intititalState = {
  search: "",
};

const organizatonsSlice = createSlice({
  name: "filters",
  initialState: intititalState,
  reducers: {
    setFilter(state, { payload }: { payload: string }) {
      state.search = payload;
    },
  },
});
export const { setFilter } = organizatonsSlice.actions;

export default organizatonsSlice.reducer;
