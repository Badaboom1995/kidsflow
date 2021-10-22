import makeRequest from "utils/makeRequest";

const eventsService = {
  getList: ({ page, name }) =>
    makeRequest(
      // prettier-ignore
      `/api/v2/admin/events/find?&OrderBy=1&page=${page || 0}${name ? `&q=${name}` : ''}`,
      "GET"
    ),
  getById: (id) => makeRequest(`/api/v2/admin/events/${id}`, "GET"),
  create: (body, partnerId) => makeRequest(`/api/v2/admin/events/`, "POST", body, [{ key: "X-Execute-As", value: "b33f0376-e2da-4be4-93f4-90f1337eaca4" }]),
};

export default eventsService;
