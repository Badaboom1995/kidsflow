import makeRequest from "utils/makeRequest";

const userService = {
  auth: (credentials: { phoneNumber: string; password: string }) =>
    makeRequest("/api/auth/token", "POST", credentials),
};

export default userService;
