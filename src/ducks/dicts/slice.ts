import { createSlice } from "@reduxjs/toolkit";
import { getDirections, getCategories, getPartners, getCategoriesHigh } from "./actions";
import makeReducer from "utils/makeReducer";

type TDict = { name: string; value: string; parentId?: string };
type InititalState = {
  directions: TDict[];
  categories: TDict[];
  categoriesHigh: TDict[];
  partners: TDict[];
  loading: boolean;
};

const intititalState: InititalState = {
  directions: [],
  categories: [],
  categoriesHigh: [],
  partners: [],
  loading: false,
};

const organizatonsSlice = createSlice({
  name: "dicts",
  initialState: intititalState,
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getDirections,
      (state, payload) => {
        state.directions = payload.data
          .filter(item => item.level === 1)
          .map((item) => ({
            name: item.name,
            value: item.eventDirectionId,
          }));
      },
      () => { }
    );
    makeReducer(
      builder,
      getCategories,
      (state, payload) => {
        state.categories = payload.data
          .filter(item => item.level === 2)
          .map((item) => ({
            name: item.name,
            value: item.eventDirectionId,
            parentId: item.parentId,
          }));
      },
      () => { }
    );
    makeReducer(
      builder,
      getCategoriesHigh,
      (state, payload) => {
        state.categoriesHigh = payload.data
          .filter(item => item.level === 3)
          .map((item) => ({
            name: item.name,
            value: item.eventDirectionId,
            parentId: item.parentId,
          }));
      },
      () => { }
    );
    makeReducer(
      builder,
      getPartners,
      (state, payload) => {
        state.partners = payload.entities.map((item) => ({
          name: item.partner.firstName,
          value: item.partner.partnerId,
        }));
      },
      () => { }
    );
  },
});
export const { } = organizatonsSlice.actions;

export default organizatonsSlice.reducer;
