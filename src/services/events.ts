import makeRequest from "utils/makeRequest";

const eventsService = {
  getList: (page?, name?, status?) =>
    makeRequest(
      // prettier-ignore
      `/api/v2/admin/events/find?sort=${status === undefined ? '1' : status}${name ? "&OrderBy=" + name : ""}&page=${page || 0}`,
      "GET"
    ),
  getById: (id) => makeRequest(`/api/v2/admin/events/${id}`, "GET"),
  create: (body) => makeRequest(`/api/v2/admin/events/`, "POST", body, [{ key: "X-Execute-As", value: "b33f0376-e2da-4be4-93f4-90f1337eaca4" }]),
};

export default eventsService;
