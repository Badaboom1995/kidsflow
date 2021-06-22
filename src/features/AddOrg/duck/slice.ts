import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import makeReducer from "utils/makeReducer";
import { getOrganizationById, bootstrap, getCategories } from "./actions";

type initialState = {
  loading: boolean;
  uploadIds: string[];
  directions?: { name: string; value: string }[];
  currentDirection?: string;
  categories?: any[];
  partners?: any[];
  currentOrganization?: any;
};

export const initialState: initialState = {
  loading: true,
  uploadIds: [],
  partners: null,
  directions: [],
  currentDirection: null,
  categories: [],
  currentOrganization: null,
};

const addUserFormSlice = createSlice({
  name: "addOrg",
  initialState: initialState,
  reducers: {
    addUploadId(state, { payload }) {
      state.uploadIds.push(payload);
    },
    removeUploadIds(state) {
      state.uploadIds = [];
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getCategories,
      (state, { categories, parentId }) => {
        state.currentDirection = state.directions.find(
          (item) => item.value === parentId
        ).value;
        state.categories = categories.data
          .filter((item) => item.parentId === parentId)
          .map((item) => ({
            name: item.name,
            value: item.eventDirectionId,
          }));
      },
      () => {
        toast.error("Организация не найдена");
      },
      true
    );
    makeReducer(
      builder,
      getOrganizationById,
      (state, payload) => {
        state.currentOrganization = payload;
      },
      () => {
        toast.error("Организация не найдена");
      }
    );
    makeReducer(
      builder,
      bootstrap,
      (state, payload) => {
        state.partners = payload.partners.map((item) => ({
          name: item.firstName,
          value: item.partnerId,
        }));
        state.partners = payload.partners;
        state.directions = payload.directions;
        state.categories = payload.categories;
        state.currentOrganization = payload.currentOrganization;
      },
      () => {
        toast.error("Организация не найдена");
      }
    );
  },
});

export const { addUploadId, removeUploadIds } = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
