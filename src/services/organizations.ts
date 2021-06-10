import makeRequest from "utils/makeRequest";

const organizationsService = {
  getList: () => makeRequest("/api/v2/admin/organizations?page=1", "GET"),
  create: (body) => makeRequest("/api/v2/admin/organizations", "POST", body),
  // prettier-ignore
  update: (body, id: string) => makeRequest(`/api/v2/admin/organizations/${id}`, "PUT", body),
  partnersList: () => makeRequest("/api/v2/admin/partners/find", "GET"),
};

export default organizationsService;
