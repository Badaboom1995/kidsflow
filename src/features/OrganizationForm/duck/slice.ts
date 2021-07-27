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
  getAddressSuggest,
} from "./actions";
import {
  TGeneralFormState,
  TContactsFormState,
  TFormalFormState,
} from "../types";

type initialState = {
  loading: boolean;
  uploadIds: string[];
  directions?: { name: string; value: string }[];
  currentDirection?: string;
  categories?: Record<string, string>[];
  cities?: { value: string; name: string }[];
  stations?: { value: string; name: string }[];
  partners?: any[];
  prompts: string[];
  images?: { id: string; url: string }[];
  data?: {
    general: TGeneralFormState;
    contacts: TContactsFormState;
    legal: TFormalFormState;
  };
};

export const initialState: initialState = {
  loading: true,
  currentDirection: null,
  partners: null,
  uploadIds: [],
  directions: [],
  categories: [],
  stations: [],
  prompts: [],
  images: [],
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
    clearData(state) {
      state.data = {
        general: null,
        contacts: null,
        legal: null,
      };
      state.images = [];
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
      getAddressSuggest,
      (state, payload) => {
        const suggests = payload.data.map((item) => item.value);
        state.prompts = suggests;
      },
      (state) => {
        state.prompts = [];
      },
      true
    );
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
      (state, { data }) => {
        state.images.push({ id: data[0].id, url: data[0].cloudUrl });
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
        state.images = state.images.filter((item) => item.id !== payload);
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
        state.partners = payload.partners;
        state.directions = payload.directions;
        state.categories = payload.categories;
        state.stations = payload.metro
          .reduce(
            (accum, line) => [
              ...accum,
              ...line.stations.map((station) => ({
                value: station.id,
                name: station.name,
              })),
            ],
            []
          )
          .sort((a, b) => (a.name < b.name ? -1 : 1));
        if (payload.currentOrganization) {
          const {
            about,
            name,
            directions,
            partner,
            ageFrom,
            ageTo,
            address,
            phoneNumber,
            photos,
            email,
            site,
            metroStation,
            entity,
            accountNumber,
            taxIdNumber,
            primaryStateNumber,
            legalAddress,
            referralLink,
          } = payload.currentOrganization;

          state.data.general = {
            about,
            name,
            directions: directions?.find((item) => !item.parentId)
              ?.eventDirectionId,
            category: directions
              ?.filter((item) => item.parentId)
              .map((item) => item.eventDirectionId),
            businessHours: "",
            ageFrom: ageFrom?.toString(),
            ageTo: ageTo?.toString(),
            partnerId: partner?.partnerId,
          };
          state.images = photos.map((item) => ({
            id: item.id,
            url: item.cloudUrl,
          }));
          state.data.contacts = {
            address,
            phoneNumber,
            email,
            site,
            metroStation,
            referralLink,
          };
          state.data.legal = {
            entity,
            accountNumber,
            taxIdNumber,
            primaryStateNumber,
            legalAddress,
          };
        }
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
  clearData,
} = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
