import { createSlice } from "@reduxjs/toolkit";
import { getEventById, getOrganizationsPrompt, sendEvent, bootstrapEvents } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";


const eventsSlice = createSlice({
  name: "eventsForm",
  initialState: {
    loading: false,
    orgPrompts: [],
    eventData: null,
    extraData: { organizationName: '' }
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
      (state, { event, organization, partner }) => {

        const { eventDate, numberOfSpots, ageTo, ageFrom, about, direction } = event
        const { organizationId, name, phoneNumber, site, email } = organization
        const normalizedData = {
          name: event.name,
          eventDate: eventDate.split('T')[0],
          time: eventDate,
          numberOfSpots: `${numberOfSpots}`,
          ageTo: `${ageTo}`,
          ageFrom: `${ageFrom}`,
          about,
          eventDirectionId: direction.eventDirectionId,
          categoryId: direction.parent.eventDirectionId,
          organizationId: organizationId,
          phoneNumber,
          site,
          email
        };

        state.eventData = normalizedData;
        state.extraData.organizationName = name
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      },
      true
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
      sendEvent,
      (state, payload) => {
        toast.success("Событие создано");
      },
      (error) => {
        toast.error('Не удалось создать');
      },
      true
    );
    makeReducer(
      builder,
      bootstrapEvents,
      (state, payload) => {
      },
      (error) => {
        toast.error('Не удалось создать');
      }
    );
  },
});

export const { clearOrgPrompts, clearEventData, clearEventAll } = eventsSlice.actions;

export default eventsSlice.reducer;
