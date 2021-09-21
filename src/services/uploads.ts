import { serverUrl } from "config/constants";
import makeRequest from "utils/makeRequest";

const uploadsService = {
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
  deleteImage: (orgId, uploadId) =>
    makeRequest(`/api/producercenter/${orgId}/upload/${uploadId}`, "DELETE"),
};

export default uploadsService;
