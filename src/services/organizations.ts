import makeRequest from "utils/makeRequest";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

const organizationsService = {
  getList: (page?) =>
    makeRequest(`/api/v2/admin/organizations?page=${page || 1}`, "GET"),
  create: (body) => makeRequest("/api/v2/admin/organizations", "POST", body),
  // prettier-ignore
  update: (body, id: string) => makeRequest(`/api/v2/admin/organizations/${id}`, "PUT", body),
  partnersList: () => makeRequest("/api/v2/admin/partners/find", "GET"),
  uploadImage: (image: any, onSuccess) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImIyZDlhYTMyLTZhOWEtNDExMi05NDI0LTU4ZTY1ZTY5YTZkNiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiIrNzAwMDAwMDAwMDEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIrNzAwMDAwMDAwMDEiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IkxVMjUzU1QyWVI2RFhNR1JKNkxSSjVQMjJCM1dUSUU0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi0JDQtNC80LjQvSIsIm5iZiI6MTYyMTkxMjk4OCwiZXhwIjoxNjUzNDQ4OTg4LCJpc3MiOiJ0ZXN0LWNob3BwZXIucG9sb25pdW1hcnRzLmNvbSIsImF1ZCI6InRlc3QtY2hvcHBlci5wb2xvbml1bWFydHMuY29tIn0.nDt3yw96ZcdIiBBT4RQR0tciKrzSOwuFIuErNZ4F0nc"
    );

    var formdata = new FormData();
    formdata.append("Media", image, image.name);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(serverUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => onSuccess(result.data[0].uploadId))
      .catch((error) => console.log("error", error));
  },
};

export default organizationsService;
