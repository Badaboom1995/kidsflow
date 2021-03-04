import { createSlice } from "@reduxjs/toolkit";
import makeReducer from "utils/makeRreducer";
import { loadCategories } from "./actions";

type initialState = {
  categoriesIds: string[];
  entities: any[];
};

export const initialState: initialState = {
  categoriesIds: [],
  entities: [],
};

const filtersSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    addCategory(state, { payload }) {
      state.categoriesIds.push(payload);
    },
    removeCategory(state, { payload }) {
      state.categoriesIds = state.categoriesIds.filter(
        (catId) => catId !== payload
      );
    },
    setChoosedCategories(state, { payload }) {
      state.categoriesIds = payload;
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      loadCategories,
      (state, payload) => {
        state.entities = payload.data;
      },
      () => {
        console.log("error");
      }
    );
  },
});

export const {
  addCategory,
  removeCategory,
  setChoosedCategories,
} = filtersSlice.actions;

export default filtersSlice.reducer;
