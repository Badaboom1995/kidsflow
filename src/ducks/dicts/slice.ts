import { createSlice } from "@reduxjs/toolkit";
import {getDirections, getCategories, getPartners, getCategoriesHigh, getStations, sliceName} from "./actions";
import makeReducer from "utils/makeReducer";
import {toast} from "react-toastify";

type TDict = { name: string; value: string; parentId?: string };
type InititalState = {
  directions: TDict[];
  categories: TDict[];
  categoriesHigh: TDict[];
  partners: TDict[];
  metro: any[]
  loading: boolean;
};

const intititalState: InititalState = {
  directions: null,
  categories: null,
  categoriesHigh: null,
  metro: null,
  partners: null,
  loading: false,
};

const organizatonsSlice = createSlice({
  name: sliceName,
  initialState: intititalState,
  reducers: {},
  extraReducers: (builder) => {
    // makeReducer(
    //   builder,
    //   getDirections,
    //   (state, payload) => {
    //     state.directions = payload.data
    //       .filter(item => item.level === 1)
    //       .map((item) => ({
    //         name: item.name,
    //         value: item.eventDirectionId,
    //       }));
    //   },
    //   (e) => {
    //       toast.error('' )
    //   }
    // );
    // --------------
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
      (e) => {
          toast.error('' )
      }
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
      () => {}
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
    makeReducer(
      builder, getStations,
      (state, payload) => {
         state.metro = payload.data.lines.reduce(
             (accum, line) => [
                 ...accum,
                 ...line.stations.map((station) => ({
                     value: station.name,
                     name: station.name,
                 })),
             ],
             []
         ).sort((a, b) => (a.name < b.name ? -1 : 1))
          // state.partners = payload.entities.map((item) => ({
          //     name: item.partner.firstName,
          //     value: item.partner.partnerId,
          // }));
      },
      () => { }
    );
  },
});
export const { } = organizatonsSlice.actions;

export default organizatonsSlice.reducer;
