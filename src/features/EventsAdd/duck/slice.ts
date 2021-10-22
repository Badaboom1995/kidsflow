import { createSlice } from "@reduxjs/toolkit";
import { getEventById, getOrganizationsPrompt, createEvent } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";

const eventsSlice = createSlice({
  name: "eventsForm",
  initialState: {
    loading: false,
    orgPrompts: [],
    eventData: null,
  },
  reducers: {
    clearEventAll(state) {
      state.loading = true
      state.orgPrompts = []
      state.eventData = null
    },
    clearOrgPrompts(state) {
      state.orgPrompts = []
    },
    clearEventData(state) {
      state.eventData = null
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getEventById,
      (state, payload) => {
        state.eventData = payload.event;
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      }
    );
    makeReducer(
      builder,
      getOrganizationsPrompt,
      (state, payload) => {

        state.orgPrompts = payload.entities ? payload.entities.filter(item => item.isActive && item.status === 'Active').map(item => ({ name: item.name, value: item.organizationId })) : []
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      },
      true
    );
    makeReducer(
      builder,
      createEvent,
      (state, payload) => {
        toast.success("Событие создано");
      },
      (error) => {
        toast.error('Не удалось создать');
      },
      true
    );
  },
});

export const { clearOrgPrompts, clearEventData, clearEventAll } = eventsSlice.actions;

export default eventsSlice.reducer;
