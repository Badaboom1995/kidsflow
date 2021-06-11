const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api-dev.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

// const token = localStorage.getItem("vzletaemAdminToken");

type MethodType = "GET" | "POST" | "PUT" | "UPDATE" | "DELETE";

const makeRequest = async (url: string, method: MethodType, body?: any) => {
  const token = localStorage.getItem("vzletaemAdminToken");
  const commonHeaders: HeadersInit = new Headers();
  commonHeaders.set("Content-Type", "application/json");

  // TODO remove
  commonHeaders.append("Authorization", `Bearer ${token}`);
  // TODO remove

  const fetchConfig: any = { method, headers: commonHeaders };
  if (body) fetchConfig.body = JSON.stringify(body);
  const response = await fetch(`${serverUrl}${url}`, fetchConfig);
  const data = await (response.status !== 204 ? response?.json() : "");

  commonHeaders.delete("Authorization");
  return data;
};

export default makeRequest;
