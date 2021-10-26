import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/events";
import organizationsService from "services/organizations";
import { getDirections, getCategories, getPartners } from "ducks/dicts/actions";
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
      eventDate,
      time,
      categoryId,
      uploadIds,
      ageFrom,
      ageTo,
      organizationId,
      isActive,
      address,
      partner
    } = payload.values;

    const data = {
      name,
      about,
      gender: parseInt(gender),
      numberOfSpots: parseInt(numberOfSpots),
      ageFrom: parseInt(ageFrom),
      ageTo: parseInt(ageTo),
      eventDirectionId: payload.eventId ? eventDirectionId : eventDirectionId[0],
      categoryId,
      organizationId,
      isActive: isActive === "active" ? true : false,
      uploadIds,
      lat: parseFloat(address.split(" ")[0]),
      lon: parseFloat(address.split(" ")[1]),
      eventDate: `${eventDate}T${moment(time).format("HH:mm")}`
    };
    try {
      let res
      if (payload.type === 'create') { res = await eventsService.create(data, partner); }
      if (payload.type === 'update') { res = await eventsService.update(data, payload.eventId); }
      payload.history.push('/events')
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const getEventById = createAsyncThunk<any, any>(
  "events/getEventById",
  async (id) => {
    try {
      const res = await eventsService.getById(id);
      console.log(res)
      return res;
    } catch (error) {
      console.log(error);
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
      await dispatch(getPartners());
      return
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
