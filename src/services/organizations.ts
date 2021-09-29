import makeRequest from "utils/makeRequest";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

const organizationsService = {
  getList: (page?, name?, status?) =>
    makeRequest(
      // prettier-ignore
      `/api/v2/admin/organizations?sort=${status === undefined ? '1' : status}${name ? "&OrderBy=" + name : ""}&page=${page || 0}`,
      "GET"
    ),
  getById: (id) => makeRequest(`/api/v2/admin/organizations/${id}`, "GET"),
  create: (body) => makeRequest("/api/v2/admin/organizations", "POST", body),
  // prettier-ignore
  update: (body, id: string) => makeRequest(`/api/v2/admin/organizations/${id}`, "PUT", body),
  partnersList: () =>
    makeRequest("/api/v2/admin/partners/find", "GET", null, true),
  deleteImage: (orgId, uploadId) =>
    makeRequest(`/api/producercenter/${orgId}/upload/${uploadId}`, "DELETE"),
  //TODO. Переделаать на makeRequest
  uploadImage: async (image: any) => {
    const token = localStorage.getItem("vzletaemAdminToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

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
