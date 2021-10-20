import makeRequest from "utils/makeRequest";

const directionsService = {
  getList: (level: 1 | 2) =>
    makeRequest(
      `/api/v2/admin/event-directions/find?levelFrom=${level}&levelTo=${level}`,
      "GET",
      null,
    ),
};

export default directionsService;
