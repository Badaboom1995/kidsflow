import { serverUrl } from "config/constants";

type MethodType = "GET" | "POST" | "PUT" | "UPDATE" | "DELETE";

const makeRequest = async (
  url: string,
  method: MethodType,
  body?: Record<string, string>,
  extraHeaders?: { key: string; value: string }[]
) => {
  const token = localStorage.getItem("vzletaemAdminToken");
  const commonHeaders: HeadersInit = new Headers();
  commonHeaders.set("Content-Type", "application/json");
  extraHeaders &&
    extraHeaders.forEach((item) => commonHeaders.set(item.key, item.value));

  // TODO remove
  commonHeaders.append("Authorization", `Bearer ${token}`);
  // TODO remove

  const fetchConfig: any = { method, headers: commonHeaders };
  if (body) fetchConfig.body = JSON.stringify(body);
  const response = await fetch(`${serverUrl}${url}`, fetchConfig);
  if (response.status > 300) {
    const data = await response?.json();
    return Promise.reject(data.errorMessage);
  }
  const data = await (response.status !== 204 ? response?.json() : "");
  commonHeaders.delete("Authorization");
  return data;
};

export default makeRequest;
