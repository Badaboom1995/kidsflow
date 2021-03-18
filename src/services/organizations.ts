import makeRequest from "utils/makeRequest";

import { CoordsType } from "types/coords";

const organizationsService = {
  getItemsInSquare: (northEast: CoordsType, southWest: CoordsType) =>
    makeRequest(
      `/geo/organizations/find?lat1=${northEast.lat}&lon1=${northEast.lng}&lat${southWest.lat}&lon2=${southWest.lng}`,
      "GET"
    ),
};

export default organizationsService;
