const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

const token =
  process.env.NODE_ENV === "production"
    ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImIyZDlhYTMyLTZhOWEtNDExMi05NDI0LTU4ZTY1ZTY5YTZkNiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiIrNzAwMDAwMDAwMDEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIrNzAwMDAwMDAwMDEiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IkxVMjUzU1QyWVI2RFhNR1JKNkxSSjVQMjJCM1dUSUU0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi0JDQtNC80LjQvSIsIm5iZiI6MTYxNzY4NDg3NywiZXhwIjoxNjQ5MjIwODc3LCJpc3MiOiJodHRwOi8vYXBpLnZ6bGV0YWVtLnJ1IiwiYXVkIjoiaHR0cDovL2FwaS52emxldGFlbS5ydSJ9.PdoAocuQ9v2idB217cV_cGdqNj9saQQdORljO9iny28"
    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImIyZDlhYTMyLTZhOWEtNDExMi05NDI0LTU4ZTY1ZTY5YTZkNiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiIrNzAwMDAwMDAwMDEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIrNzAwMDAwMDAwMDEiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IkxVMjUzU1QyWVI2RFhNR1JKNkxSSjVQMjJCM1dUSUU0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi0JDQtNC80LjQvSIsIm5iZiI6MTYxNDMxMjczMywiZXhwIjoxNjQ1ODQ4NzMzLCJpc3MiOiJ0ZXN0LWNob3BwZXIucG9sb25pdW1hcnRzLmNvbSIsImF1ZCI6InRlc3QtY2hvcHBlci5wb2xvbml1bWFydHMuY29tIn0.FeSiud_mmcT2I8FbZTj7VeRt6X7VXfRQ7qSdDlG6xmQ";

type MethodType = "GET" | "POST" | "PUT" | "UPDATE" | "DELETE";

const makeRequest = async (url: string, method: MethodType, body?: any) => {
  const commonHeaders: HeadersInit = new Headers();
  commonHeaders.set("Content-Type", "application/json");

  // TODO remove
  commonHeaders.append("Authorization", `Bearer ${token}`);
  // TODO remove

  const fetchConfig: any = { method, headers: commonHeaders };
  if (body) fetchConfig.body = JSON.stringify(body);
  const response = await fetch(`${serverUrl}${url}`, fetchConfig);
  const data = await response.json();

  commonHeaders.delete("Authorization");
  return data;
};

export default makeRequest;
