import { createSlice } from "@reduxjs/toolkit";
import makeReducer from "utils/makeRreducer";
import { loadKinds } from "./actions";

type initialState = {
  activeKind: any | null;
  entities: any[];
  loading: boolean;
};

export const initialState: initialState = {
  activeKind: null,
  entities: [],
  loading: false,
};

const filtersSlice = createSlice({
  name: "kinds",
  initialState: initialState,
  reducers: {
    chooseKind(state, { payload }) {
      state.activeKind = payload;
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      loadKinds,
      (state, payload) => {
        state.entities = payload.data;
      },
      () => {
        console.log("error");
      }
    );
  },
});

export const { chooseKind } = filtersSlice.actions;

export default filtersSlice.reducer;
