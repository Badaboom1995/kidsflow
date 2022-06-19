import makeRequest from "utils/makeRequest";
import makeUploadRequest from "utils/makeUploadRequest";
type StoryType = {
    highlightId: number,
    imageUrl: string
    type: number,
    order: number
    duration?: number,
    backgroundColor?: string,
}
const highlightsService = {
    createStories: (stories: StoryType[]) =>
        makeRequest(`/api/v2/admin/stories`, "POST", { stories }),
    createHighlight: (body) =>
        makeRequest(`/api/v2/admin/highlights`, "POST", body),
    addStoryImage: (image) =>
        makeUploadRequest({ url: `api/v2/uploads`, image }),
    getHighlights: () =>
        makeRequest(`/api/v2/admin/highlights/find`, "GET"),
    getHighlightById: (id) =>
        makeRequest(`/api/v2/admin/highlights/${id}`, "GET"),
    updateHighlight: (highlight) =>
        makeRequest(`/api/v2/admin/highlights/${highlight.highlightId}`, "PATCH", highlight),
    updateStories: (stories, id) =>
        makeRequest(`/api/v2/admin/stories/by-highlight-id/${id}`, "PUT", stories)
};

export default highlightsService;
