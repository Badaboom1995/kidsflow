import makeRequest from "utils/makeRequest";

const eventsService = {
  getList: ({ page, name }) =>
    makeRequest(
      // prettier-ignore
      `/api/v2/admin/events/find?&OrderBy=1&page=${page || 0}${name ? `&q=${name}` : ''}`,
      "GET"
    ),
  getById: (id) => makeRequest(`/api/v2/admin/events/${id}`, "GET"),
  create: (body, partnerId) => makeRequest(`/api/v2/admin/events/`, "POST", body, [{ key: "X-Execute-As", value: partnerId }]),
};

export default eventsService;
