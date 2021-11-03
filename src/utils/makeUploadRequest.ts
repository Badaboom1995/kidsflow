import { serverUrl } from "config/constants";

const makeUploadRequest = async ({ image, url, }) => {
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
  try {
    const response = await fetch(`${serverUrl}/${url}`, requestOptions);
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    return new Error(error)
  }
};

export default makeUploadRequest;
