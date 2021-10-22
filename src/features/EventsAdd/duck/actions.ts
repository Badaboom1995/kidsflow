import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/events";
import organizationsService from "services/organizations";

export const createEvent = createAsyncThunk<any, Record<any, any>>(
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
      uploads,
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
      eventDirectionId: eventDirectionId[0],
      categoryId,
      organizationId,
      isActive: isActive === "active" ? true : false,
      uploads,
      lat: parseFloat(address.split(" ")[0]),
      lon: parseFloat(address.split(" ")[1]),
      eventDate: `${eventDate}T${time}`
    };
    try {
      const res = await eventsService.create(data, partner);
      payload.history.push('/events')
      return res;
    } catch (error) {
      console.log(error);
      return error;
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
