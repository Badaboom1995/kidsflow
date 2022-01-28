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
        eventDirectionId: eventDirectionHighId[0] || eventDirectionId[0] || categoryId,
        categoryId,
        organizationId,
        isActive: isActive === "active" ? true : false,
        uploadIds,
        place: place?.split("&")[2],
        lat: parseFloat(place?.split("&")[0]),
        lon: parseFloat(place?.split("&")[1]),
        eventDate: `${eventDate}T${moment(time).format("HH:mm")}`
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
  async (id) => {
    try {
      const res = await eventsService.getById(id);
      return res;
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
  async ({ id }, { dispatch }) => {
    try {
      id && await dispatch(getEventById(id));
      await dispatch(getDirections());
      await dispatch(getCategories());
      await dispatch(getCategoriesHigh());
      await dispatch(getPartners());
      return
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
