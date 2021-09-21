import makeRequest from "utils/makeRequest";

const eventsService = {
  getList: (page?, name?, status?) =>
    makeRequest(
      // prettier-ignore
      `/api/v2/admin/events/find?sort=${status === undefined ? '1' : status}${name ? "&OrderBy=" + name : ""}&page=${page || 0}`,
      "GET"
    ),
  getById: (id) =>
    makeRequest(`/api/v2/admin/events/${id}`, "GET", undefined, [
      { key: "X-Server-Select", value: "migration" },
    ]),
  create: (body) =>
    makeRequest(`/api/v2/admin/events/`, "POST", body, [
      { key: "X-Server-Select", value: "migration" },
    ]),
};

export default eventsService;
