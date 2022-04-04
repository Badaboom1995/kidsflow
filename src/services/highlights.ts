import makeRequest from "utils/makeRequest";
import makeUploadRequest from "utils/makeUploadRequest";

const highlightsService = {
    createStory: (body) =>
        makeRequest(`/api/v2/admin/stories`, "POST", body),
    createHighlight: (body) =>
        makeRequest(`/api/v2/admin/highlights`, "POST", body),
    addStoryImage: (image) =>
        makeUploadRequest({ url: `api/v2/uploads`, image }),
    getHighlights: () =>
        makeRequest(`/api/v2/admin/highlights/find`, "GET"),
    updateHighlight: (highlight) =>
        makeRequest(`/api/v2/admin/highlights/${highlight.highlightId}`, "PATCH", highlight),
    updateStories: (stories, id) =>
        makeRequest(`/api/v2/admin/stories/by-highlight-id/${id}`, "PUT", stories)
};

export default highlightsService;
