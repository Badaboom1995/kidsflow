import makeRequest from "utils/makeRequest";
import { TOrganizationService } from './types'

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

const organizationsService = {
  getList: (payload: TOrganizationService) =>
    makeRequest(
      `/api/v2/admin/organizations?sort=${payload.sort === undefined ? '1' : payload.sort}&page=${payload.page || 0}&pageSize=${payload.pageSize || 20}${payload.orderBy ? "&OrderBy=" + payload.orderBy : ""}${payload.name ? `&search=${payload.name}` : ''}`,
      "GET"
    ),
  getById: (id) => makeRequest(`/api/v2/admin/organizations/${id}`, "GET"),
  create: (body, partnerId) => makeRequest("/api/v2/admin/organizations", "POST", body, [{ key: "X-Execute-As", value: partnerId }]),
  update: (body, id: string) => makeRequest(`/api/v2/admin/organizations/${id}`, "PATCH", body),
  partnersList: () =>
    makeRequest("/api/v2/admin/partners/find", "GET", null),
  deleteImage: (orgId, uploadId) =>
    makeRequest(`/api/producercenter/${orgId}/upload/${uploadId}`, "DELETE"),
  deleteExtraImage: ({uploadId, id}) =>
      makeRequest(`/api/producercenter/${id}/upload/${uploadId}`, "DELETE"),

  //TODO. Переделаать на makeRequest
  uploadImage: async (image: any) => {
    const token = localStorage.getItem("vzletaemAdminToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("X-Server-Select", "migration");

    var formdata = new FormData();
    formdata.append("Media", image, image.name);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(`${serverUrl}/api/v2/uploads`, requestOptions);
    const data = await response?.json();
    return data;
  },

  uploadExtraImage: async (image: any, orgId: string) => {
    const token = localStorage.getItem("vzletaemAdminToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("X-Server-Select", "migration");

    var formdata = new FormData();
    formdata.append("Media", image, image.name);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(
      `${serverUrl}/api/producercenter/${orgId}/upload`,
      requestOptions
    );
    const data = await response?.json();
    return data;
  },
};

export default organizationsService;
