import makeRequest from "utils/makeRequest";

const directionsService = {
  getList: (level: 1 | 2 | 3, type: 'EventDirection' | 'OrganizationDirection') =>
    makeRequest(
      `/api/v2/admin/directions?levelFrom=${level}&levelTo=${level}&type=${type}`,
      "GET",
    ),
};

export default directionsService;
