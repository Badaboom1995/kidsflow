import { createAsyncThunk } from "@reduxjs/toolkit";
import highlightsService from "services/highlights";

export const addStory = createAsyncThunk<any, any>(
  "highlisghts/storyAdd",
  async (story, { rejectWithValue }) => {
    let file = await fetch(story.imageUrl).then(r => r.blob()).then(blobFile => new File([blobFile], "storyImage", { type: "image/png" }))
    const upload = await highlightsService.addStoryImage(file)
    const cloudUrl = upload.data[0].cloudUrl
    if (!upload) return rejectWithValue("error");
    return { ...story, imageUrl: cloudUrl };
  }
);

export const createHighlightWrapper = createAsyncThunk<any, any>(
  "highlisghts/createWrapper",
  async (highlight, { rejectWithValue }) => {
    const res = await highlightsService.createHighlight(highlight);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
export const createHighlight = createAsyncThunk<any, any>(
  "highlisghts/create",
  async ({ highlight, stories, history }) => {
    const highlightWrapper = await highlightsService.createHighlight(highlight);
    const highlightId = highlightWrapper.highlightId
    await highlightsService.createStory({
      stories: stories.map(item => ({
        ...item,
        highlightId,
        type: parseInt(item.type),
        order: parseInt(item.order)
      }))
    })
    history.push('/highlights')
    return
  }
);
