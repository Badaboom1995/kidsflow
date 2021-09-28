import makeRequest from "utils/makeRequest";

const directionsService = {
  getList: (level: 1 | 2) =>
    makeRequest(
      `/api/v2/eventDirections?levelFrom=${level}&levelTo=${level}`,
      "GET",
      null,
      true
    ),
};

export default directionsService;
