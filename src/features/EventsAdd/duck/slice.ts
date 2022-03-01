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
    extraData: { organizationName: '' },
    photosUrls: []
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
      state.extraData = { organizationName: '' }
      state.photosUrls = []
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getEventById,
      (state, { event, organization, partner, dicts }) => {
        console.log('event')
        const { eventDate, numberOfSpots, ageTo, ageFrom, about, direction, photos, gender, place } = event
        const { organizationId, name, phoneNumber, site, email } = organization
        const { partnerId } = partner

        const levelsArray = direction?.eventDirectionId.split('-')
        let [level0, level1, level2] = [[], [], []]
        if (levelsArray) {
          level0 = dicts.directions.find(item => item.value === `${levelsArray[0]}-${levelsArray[1]}`).value
          level1 = dicts.categories.find(item => item.value?.includes(levelsArray[2])).value
          level2 = dicts.categoriesHigh.find(item => item.value?.includes(levelsArray[3]))?.value
        }

        const normalizedData = {
          name: event.name,
          eventDate: eventDate.split('T')[0],
          time: eventDate,
          numberOfSpots: `${numberOfSpots}`,
          ageFrom: `${ageFrom ? ageFrom : 0}`,
          ageTo: `${ageTo ? ageTo : 24}`,
          about,
          categoryId: level0,
          eventDirectionId: level1,
          eventDirectionHighId: level2,
          organizationId: organizationId,
          phoneNumber,
          site,
          email,
          place,
          partner: partnerId,
          gender,
          uploadIds: photos.map(item => item.id)
        };

        state.eventData = normalizedData;
        state.extraData.organizationName = name
        state.photosUrls = photos.map(item => ({ id: item.id, url: item.cloudUrl }))
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
      (error, action) => {
        toast.error(action.error.message);
        console.log(error, action)
      },
      true
    );
    makeReducer(
      builder,
      bootstrapEvents,
      (state, payload) => {
      },
      (error) => {
        toast.error('Не получилось загрузить');
      }
    );
  },
});

export const { clearOrgPrompts, clearEventData, clearEventAll } = eventsSlice.actions;

export default eventsSlice.reducer;
