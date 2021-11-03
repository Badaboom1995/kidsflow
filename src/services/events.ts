import makeRequest from "utils/makeRequest";
import makeUploadRequest from "utils/makeUploadRequest";

const eventsService = {
  getList: ({ page, name }) =>
    makeRequest(
      // prettier-ignore
      `/api/v2/admin/events/find?&OrderBy=1&page=${page || 0}${name ? `&q=${name}` : ''}`,
      "GET"
    ),
  getById: (id) => makeRequest(`/api/v2/admin/events/${id}`, "GET"),
  create: (body, partnerId) => makeRequest(`/api/v2/admin/events/`, "POST", body, [{ key: "X-Execute-As", value: partnerId }]),
  update: (body, id) => makeRequest(`/api/v2/admin/events/${id}`, "PATCH", body),
  extraUpload: (image, eventId) => makeUploadRequest({ url: `api/v2/admin/events/${eventId}/uploads`, image }),
  deleteUpload: ({ uploadId, id }: { uploadId: string, id: string }) => makeRequest(`/api/v2/admin/events/${id}/uploads`, "DELETE", { uploads: [uploadId] }),
};

export default eventsService;
