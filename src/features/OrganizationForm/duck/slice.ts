import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import makeReducer from "utils/makeReducer";
import {
  getOrganizationById,
  bootstrap,
  getCategories,
  getCategoriesHigh,
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
  isOnline: boolean;
  uploadIds: string[];
  directions?: { name: string; value: string }[];
  currentDirection?: string;
  categories?: Record<string, string>[];
  categoriesHigh?: Record<string, string>[];
  cities?: { value: string; name: string }[];
  stations?: { value: string; name: string }[];
  partners?: any[];
  prompts: string[];
  address: string;
  images?: { id: string; url: string }[];
  imagesUpload?: boolean;
  data?: {
    general: TGeneralFormState;
    contacts: TContactsFormState;
    legal: TFormalFormState;
  };
  businessHours: { day: number; openTime: string; closeTime: string }[];
};

export const initialState: initialState = {
  isOnline: false,
  loading: false,
  currentDirection: null,
  partners: null,
  uploadIds: [],
  directions: [],
  categories: [],
  stations: [],
  prompts: [],
  images: [],
  businessHours: [],
  imagesUpload: false,
  address: '',
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
    setAddress(state, { payload }: { payload: { address: string } }) {
      state.address = payload.address;
    },
    switchOnline(state) {
      state.isOnline = !state.isOnline;
    },
    setSchedule(
      state,
      {
        payload,
      }: { payload: { day: number; openTime: string; closeTime: string }[] }
    ) {
      state.businessHours = payload;
    },
    clearData(state) {
      state.data = {
        general: null,
        contacts: null,
        legal: null,
      };
      state.images = [];
      state.businessHours = [];
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
        state.prompts = payload.data.map((item) => ({
          name: item.value,
          value: `${item.data.geo_lat},${item.data.geo_lon}`,
        }));
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
      getCategoriesHigh,
      (state, { categoriesHigh, parentId }) => {
        state.currentDirection = state.directions.find(
          (item) => item.value === parentId
        ).value;
        console.log(parentId)
        state.categoriesHigh = categoriesHigh.data
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
      }
    );
    makeReducer(
      builder,
      uploadExtraImage,
      (state, { data }) => {
        state.images.push({ id: data[0].id, url: data[0].cloudUrl });
      },
      () => {
        toast.error("Не удалось загрузить");
      }
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
        state.isOnline = payload.currentOrganization?.directions
          .map((item) => item.eventDirectionId)
          .includes("OnlineSchool");
        state.partners = payload.partners;
        state.directions = payload.directions;
        state.categories = payload.categories;
        state.categoriesHigh = payload.categories;

        state.stations = payload.metro
          .reduce(
            (accum, line) => [
              ...accum,
              ...line.stations.map((station) => ({
                value: station.name,
                name: station.name,
              })),
            ],
            []
          )
          .sort((a, b) => (a.name < b.name ? -1 : 1));

        state.businessHours = new Array(7)
          .fill({
            completed: true,
            openTime: "9:00",
            closeTime: "21:00",
          })
          .map((item, index) => ({ ...item, day: index }));

        if (payload.currentOrganization) {
          const {
            about,
            name,
            directions,
            partner,
            ageFrom,
            ageTo,
            address,
            lat, lon,
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
            businessHours,
            isActive,
          } = payload.currentOrganization;

          const directionId = directions[0].eventDirectionId
          const categoryId = directions[1].eventDirectionId
          const categoryHighId = directions[2]?.eventDirectionId


          const businessHoursNormalized = new Array(7)
            .fill({ completed: true })
            .map((item, index) => {
              const currentDayObject = businessHours.find(
                (elem) => elem.day === index
              );
              return {
                ...item,
                day: index,
                openTime: currentDayObject?.openTime.slice(0, 5),
                closeTime: currentDayObject?.closeTime.slice(0, 5),
              };
            });

          state.data.general = {
            about,
            name,
            directions: directionId,
            category: categoryId,
            categoryHigh: categoryHighId,
            ageFrom: ageFrom?.toString(),
            ageTo: ageTo?.toString(),
            partnerId: partner?.partnerId,
            isActive,
          };
          state.data.contacts = {
            address,
            coords: `${lat},${lon}`,
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
          state.images = photos.map((item) => ({
            id: item.id,
            url: item.cloudUrl,
          }));
          state.businessHours = businessHoursNormalized;
        }
      },
      (error) => {
        toast.error("Ошибка");
      }
    );
  },
});

export const {
  addUploadId,
  removeUploadIds,
  setSchedule,
  removeUploadId,
  addData,
  setAddress,
  clearData,
  switchOnline,
} = addUserFormSlice.actions;

export default addUserFormSlice.reducer;
