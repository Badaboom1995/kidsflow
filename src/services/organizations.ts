import makeRequest from "utils/makeRequest";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

const organizationsService = {
  // prettier-ignore
  getList: (page?) => makeRequest(`/api/v2/admin/organizations?sort=Descending&page=${page || 0}`,"GET"),
  getById: (id) => makeRequest(`/api/v2/admin/organizations/${id}`, "GET"),
  create: (body) => makeRequest("/api/v2/admin/organizations", "POST", body),
  // prettier-ignore
  update: (body, id: string) => makeRequest(`/api/v2/admin/organizations/${id}`, "PUT", body),
  partnersList: () => makeRequest("/api/v2/admin/partners/find", "GET"),
  //TODO. Переделаать на makeRequest
  uploadImage: (image: any, onSuccess) => {
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

    fetch(`${serverUrl}/api/v2/uploads`, requestOptions)
      .then((response) => response.json())
      .then((result) => onSuccess(result.data[0].uploadId))
      .catch((error) => console.log("error", error));
  },
};

export default organizationsService;
