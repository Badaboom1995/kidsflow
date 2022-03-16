import makeRequest from "utils/makeRequest";

const highlightsService = {
    createStory: (body) =>
        makeRequest(`/api/v2/admin/stories`, "POST", body),
    createHighlight: (body) =>
        makeRequest(`/api/v2/admin/stories`, "POST", body),
};

export default highlightsService;
