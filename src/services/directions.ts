import makeRequest from "utils/makeRequest";

const directionsService = {
  getList: (level: 1 | 2 | 3) =>
    makeRequest(
      `/api/v2/admin/directions?levelFrom=${level}&levelTo=${level}&type=EventDirection`,
      "GET",
    ),
};

export default directionsService;
