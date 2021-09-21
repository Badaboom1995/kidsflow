import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getEvents } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";
import { OrganizationType } from "./types";

export const eventsAdapter = createEntityAdapter<OrganizationType>({
  selectId: (org) => org?.entityId,
  sortComparer: (a, b) => (a.entityId > b.entityId ? -1 : 1),
});

const organizatonsSlice = createSlice({
  name: "organizations",
  initialState: {
    loading: false,
    totalEntities: null,
    pageSize: null,
    pageNumber: 0,
    ...eventsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getEvents,
      (state, payload) => {
        state.totalEntities = payload.totalEntities;
        state.pageSize = payload.pageSize;
        state.pageNumber = payload.pageNumber;
        eventsAdapter.setAll(state, payload.entities);
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      }
    );
  },
});

export default organizatonsSlice.reducer;
