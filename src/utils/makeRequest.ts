import { serverUrl } from "config/constants";

type MethodType = "GET" | "POST" | "PUT" | "UPDATE" | "DELETE" | "PATCH";

const makeRequest = async (
  url: string,
  method: MethodType,
  body?: Record<string, any>,
  extraHeaders?: { key: string; value: string }[],
) => {
  const token = localStorage.getItem("vzletaemAdminToken");
  const commonHeaders: HeadersInit = new Headers();
  commonHeaders.set("Content-Type", "application/json");
  commonHeaders.append("Access-Control-Allow-Origin", "true");
  extraHeaders &&
    extraHeaders.forEach((item) => commonHeaders.set(item.key, item.value));

  commonHeaders.append("Authorization", `Bearer ${token}`);

  const fetchConfig: any = { method, headers: commonHeaders };
  if (body) fetchConfig.body = JSON.stringify(body);
  try {
    const response = await fetch(`${serverUrl}${url}`, fetchConfig);
    if (response.status > 300) {
      const data = await response?.json();
      return Promise.reject(data.errorMessage);
    }
    const data = await (response.status !== 204 ? response?.json() : "");
    commonHeaders.delete("Authorization");
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default makeRequest;
