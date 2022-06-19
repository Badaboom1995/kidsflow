import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/events";
import organizationsService from "services/organizations";
import { getDirections, getCategories, getCategoriesHigh, getPartners } from "ducks/dicts/actions";
import moment from 'moment'

type eventPayload = {
  values: Record<any, any>,
  history: any,
  type: 'create' | 'update'
  eventId?: string
}

export const sendEvent = createAsyncThunk<any, eventPayload>(
  "events/create",
  async (payload) => {
    const {
      name,
      about,
      gender,
      numberOfSpots,
      eventDirectionId,
      eventDirectionHighId,
      dateFrom,
      dateTo,
      eventDate,
      time,
      categoryId,
      uploadIds,
      ageFrom,
      ageTo,
      organizationId,
      isActive,
      place,
      partner,
    } = payload.values;

    try {
      const data = {
        name,
        about,
        gender,
        numberOfSpots: parseInt(numberOfSpots),
        ageFrom: parseInt(ageFrom),
        ageTo: parseInt(ageTo),
        eventDirectionId: (eventDirectionHighId && eventDirectionHighId[0]) || eventDirectionId[0] || categoryId,
        directions: [(eventDirectionHighId && eventDirectionHighId[0]) || eventDirectionId[0] || categoryId],
        categoryId,
        organizationId,
        isActive: isActive === "active" ? true : false,
        uploadIds,
        place: place?.split("&")[2],
        lat: parseFloat(place?.split("&")[0]),
        lon: parseFloat(place?.split("&")[1]),
        eventDate: `${eventDate}T${moment(time).format("HH:mm")}`,
        dateFrom,
        dateTo,
      };
      const secondArg = payload.type === 'create' ? partner : payload.eventId
      let res = await eventsService[payload.type](data, secondArg)
      payload.history.push('/events')

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getEventById = createAsyncThunk<any, any>(
  "events/getEventById",
  async (id, { getState }) => {
    const state: Record<string, any> = getState()
    try {
      const res = await eventsService.getById(id);
      return { ...res, dicts: state.dicts };
    } catch (error) {
      return error;
    }
  }
);

export const getOrganizationsPrompt = createAsyncThunk<any, string>(
  "events/getOrganizationsPrompt",
  async (name) => {
    try {
      const res = await organizationsService.getList({ name, pageSize: 10 });
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const uploadPhoto = createAsyncThunk<any, string>(
  "events/uploadPhoto",
  async (name) => {
    try {
      const res = await organizationsService.getList({ name, pageSize: 10 });
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

type bootstrapEventsProps = { id?: string }
export const bootstrapEvents = createAsyncThunk<any, bootstrapEventsProps>(
  "events/bootstrap",
  async ({ id }, { dispatch, getState }) => {
    try {
      await dispatch(getDirections('EventDirection'));
      await dispatch(getCategories('EventDirection'));
      await dispatch(getCategoriesHigh('EventDirection'));
      await dispatch(getPartners());
      id && await dispatch(getEventById(id));
      return
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
