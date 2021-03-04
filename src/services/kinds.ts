import makeRequest from "utils/makeRequest";

const eventsService = {
  getKinds: () =>
    makeRequest("/api/v2/eventDirections?levelFrom=1&levelTo=1", "GET"),
  getCategories: () =>
    makeRequest("/api/v2/eventDirections?levelFrom=2&levelTo=2", "GET"),
  getEvents: () => makeRequest("/api/v2/parent/events/find", "GET"),
};

export default eventsService;
