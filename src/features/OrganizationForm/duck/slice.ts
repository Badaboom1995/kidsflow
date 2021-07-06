import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import makeReducer from "utils/makeReducer";
import {
  getOrganizationById,
  bootstrap,
  getCategories,
  deleteImage,
  uploadImage,
  uploadExtraImage,
} from "./actions";

type initialState = {
  loading: boolean;
  uploadIds: string[];
  directions?: { name: string; value: string }[];
  currentDirection?: string;
  categories?: Record<string, string>[];
  partners?: any[];
  currentOrganization?: any;
  images?: { id: string; url: string }[];
  data?: {
    general: Record<string, string>;
    contacts: Record<string, string>;
    legal: Record<string, string>;
  };
};

export const initialState: initialState = {
  loading: true,
  uploadIds: [],
  partners: null,
  directions: [],
  currentDirection: null,
  categories: [],
  images: [],
  currentOrganization: null,
  data: {
    general: null,
    contacts: null,
    legal: null,
  },
};

const addUserFormSlice = createSlice({
  name: "addOrg",
  initialState: initialState,
  reducers: {
    addUploadId(state, { payload }) {
      state.uploadIds.push(payload);
    },
    addData(state, { payload }: { payload: { key: string; values: string } }) {
      state.data[payload.key] = payload.values;
    },
    removeUploadIds(state) {
      state.uploadIds = [];
    },
    removeUploadId(state, { payload }) {
      state.images = state.images.filter((item) => item.id !== payload);
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
      uploadImage,
      (state, { id, url }) => {
        state.uploadIds.push(id);
        state.images.push({ id, url });
      },
      () => {
        toast.error("Не удалось загрузить");
      },
      true
    );
    makeReducer(
      builder,
      uploadExtraImage,
      (state, response) => {
        state.currentOrganization.photos.push(...response.data);
      },
      () => {
        toast.error("Не удалось загрузить");
      },
      true
    );
    makeReducer(
      builder,
      deleteImage,
      (state, payload) => {
        const currentOrganization = {
          ...state.currentOrganization,
          photos: state.currentOrganization.photos.filter(
            (item) => item.id !== payload
          ),
        };
        state.currentOrganization = currentOrganization;
      },
      () => {
        toast.error("Организация не найдена");
      },
      true
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

export const {
  addUploadId,
  removeUploadIds,
  removeUploadId,
  addData,
} = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
