import directionsService from "services/directions";
import organizationsService from "services/organizations";
import geoService from "services/geo";
import { createAsyncThunk } from "@reduxjs/toolkit";
import actionsFactory from "utils/actionsFactory";

type DirectionType = 'EventDirection' | 'OrganizationDirection'
type EntityType = 'EventDirection' | 'OrganizationDirection'

export const sliceName = "dicts"
const dictAction = actionsFactory(sliceName)

/// -----------
export const getDirectionsNew = dictAction<EntityType, Record<string, string>>(
    "get/directions",
    async (type) => await directionsService.getList(1, type)
);
export const getCategoryNew = dictAction<EntityType, Record<string, string>>(
    "get/categories",
    async (type) => await directionsService.getList(1, type)
);

// export const getEventDirections = dictAction<null, Record<string, string>>(
//     "get/eventDirections",
//     async () => await directionsService.getList(1,  'EventDirection')
// );
// export const getOrgDirections = dictAction<null, Record<string, string>>(
//     "get/orgDirections",
//     async () => await directionsService.getList(1,  "OrganizationDirection")
// );
// export const getEventCategories = dictAction<null, Record<string, string>>(
//     "get/eventCategories",
//     async () => await directionsService.getList(2,  'EventDirection')
// );
// export const getOrgCategories = dictAction<null, Record<string, string>>(
//     "get/orgCategories",
//     async () => await directionsService.getList(2,  'OrganizationDirection')
// );
// export const getEventSubcategories = dictAction<null, Record<string, string>>(
//     "get/eventSubcategories",
//     async () => await directionsService.getList(3,  'EventDirection')
// );
// export const getOrgSubcategories = dictAction<null, Record<string, string>>(
//     "get/orgSubcategories",
//     async () => await directionsService.getList(3,  'OrganizationDirection')
// );
/// -----------
export const getDirections = createAsyncThunk<Record<string, string>, DirectionType>(
    "dicts/getDirections",
    async (type, { rejectWithValue }) => {
        const res = await directionsService.getList(1, type);
        if (!res.data) return rejectWithValue("error");
        return res;
    }
);
export const getCategories = createAsyncThunk<Record<string, string>, DirectionType>(
  "dicts/getEventCategories",
  async (type, { rejectWithValue }) => {
    const res = await directionsService.getList(2, type);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getCategoriesHigh = createAsyncThunk<Record<string, string>, DirectionType>(
  "dicts/getCategoriesHigh",
  async (type, { rejectWithValue }) => {
    const res = await directionsService.getList(3, type);
    if (!res.data) return rejectWithValue("error");
    return res;
  }
);
export const getPartners = createAsyncThunk<Record<string, string>, null>(
  "dicts/getPartners",
  async (_, { rejectWithValue }) => {
    const res = await organizationsService.partnersList();
    if (!res.entities) return rejectWithValue("error");
    return res;
  }
);
export const getStations = createAsyncThunk<Record<string, string>, null>(
  "dicts/getStations",
  async (_, { rejectWithValue }) => {
    const res = await geoService.getStations();
    console.log(res)
    if (res.errorMessage) return rejectWithValue("error");
    return res;
  }
);
