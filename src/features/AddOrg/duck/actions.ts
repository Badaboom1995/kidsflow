import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";
import directionsService from "services/directions";

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
    ];
    id && tasks.push(organizationsService.getById(id));
    try {
      let result = {
        partners: null,
        directions: null,
        categories: null,
        currentOrganization: null,
      };
      await Promise.all(tasks).then((values) => {
        result.partners = values[0].data.list.map((item) => ({
          name: item.partner.firstName,
          value: item.partner.partnerId,
        }));
        result.directions = values[1].data.map((item) => ({
          name: item.name,
          value: item.eventDirectionId,
        }));
        result.categories = values[2].data.map((item) => ({
          name: item.name,
          value: item.eventDirectionId,
        }));
        result.currentOrganization = values[3];
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
);
