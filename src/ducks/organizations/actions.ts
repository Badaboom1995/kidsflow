import { createAsyncThunk } from "@reduxjs/toolkit";
import organizationsService from "services/organizations";

import { CoordsType } from "types/coords";

type BorderPointsType = { northEast: CoordsType; southWest: CoordsType };

// TODO. Create type for map

export const getOrganizationsInView = createAsyncThunk<any, any>(
  "organizations/get",
  async (map) => {
    const bounds = map.getBounds();
    const res = await organizationsService.getItemsInSquare(
      bounds._northEast,
      bounds._southWest
    );
    return res;
  }
);
