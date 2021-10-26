import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";
import directionsService from "services/directions";
import geoService from "services/geo";

//TODO. Типизация всего
export const getAddressSuggest = createAsyncThunk<any, string>(
  "addOrganization/addressSuggest",
  async (address, { rejectWithValue }) => {
    if (!address) return rejectWithValue("error");
    const res = await geoService.getSuggest(address);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
export const getOrganizationById = createAsyncThunk<any, any>(
  "addOrganization/select",
  async (id, { rejectWithValue }) => {
    const res = await organizationsService.getById(id);
    if (!res) return rejectWithValue("error");
    return res;
  }
);

export const getCategories = createAsyncThunk<any, any>(
  "addOrganization/getCategories",
  async (parentId) => {
    try {
      const categories = await directionsService.getList(2);
      return { categories, parentId };
    } catch (error) {
      throw error;
    }
  }
);

export const uploadImage = createAsyncThunk<any, any>(
  "addOrganization/uploadImage",
  async (file) => {
    try {
      const response = await organizationsService.uploadImage(file);
      return { id: response.data[0].uploadId, url: URL.createObjectURL(file) };
    } catch (error) {
      throw error;
    }
  }
);
export const uploadExtraImage = createAsyncThunk<any, any>(
  "addOrganization/uploadExtraImage",
  async ({ file, orgId }) => {
    try {
      const response = await organizationsService.uploadExtraImage(file, orgId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
export const deleteImage = createAsyncThunk<any, any>(
  "addOrganization/deleteImage",
  async ({ orgId, uploadId }) => {
    try {
      await organizationsService.deleteImage(orgId, uploadId);
      return uploadId;
    } catch (error) {
      throw error;
    }
  }
);

export const bootstrap = createAsyncThunk<any, any>(
  "addOrganization/bootstrap",
  async (id?: string) => {
    const tasks = [
      organizationsService.partnersList(),
      directionsService.getList(1),
      directionsService.getList(2),
      geoService.getStations(),
    ];
    id && tasks.push(organizationsService.getById(id));
    try {
      let result = {
        partners: null,
        directions: null,
        categories: null,
        metro: null,
        currentOrganization: null,
      };

      await Promise.all(tasks).then((values) => {
        result.partners = values[0].entities.map((item) => ({
          name: item.partner.firstName,
          value: item.partner.partnerId,
        }));
        result.directions = values[1].data.map((item) => ({
          name: item.name,
          value: item?.eventDirectionId,
        }));
        result.categories = values[2].data.map((item) => ({
          name: item.name,
          value: item?.eventDirectionId,
        }));
        result.metro = values[3].data.lines;
        result.currentOrganization = values[4] ? values[4].organization : null;
      });

      return result;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
);
