import makeRequest from "utils/makeRequest";

const digestService = {
    create: ({ payload }) => makeRequest(`/api/v2/admin/digests`, "POST", payload),
};

export default digestService;
