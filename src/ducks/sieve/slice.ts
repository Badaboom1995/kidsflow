import { createSlice } from "@reduxjs/toolkit";
type InititalState = {
  filter: any[];
  sort: { key: string; value: string };
};

const intititalState: InititalState = {
  filter: [],
  sort: { key: "", value: "" },
};

const organizatonsSlice = createSlice({
  name: "sieve",
  initialState: intititalState,
  reducers: {
    setFilter(
      state,
      {
        payload,
      }: {
        payload: { key: string };
      }
    ) {
      const { key } = payload;
      state.filter.push({ [key]: "" });
    },
    changeFilterValue(
      state,
      { payload }: { payload: { key: string; value: string } }
    ) {
      const { key, value } = payload;
      state.filter = state.filter.map((item) =>
        Object.keys(item)[0] === key ? { [Object.keys(item)[0]]: value } : item
      );
    },
    setSort(state, { payload }: { payload: { key: string; value: string } }) {
      state.sort = payload;
    },
    changeSort(state, { payload }: { payload: { value: string } }) {
      state.sort[Object.keys(state.sort)[0]] = payload.value;
    },
    clearSieves(state) {},
  },
});
export const { setFilter, changeFilterValue } = organizatonsSlice.actions;

export default organizatonsSlice.reducer;
