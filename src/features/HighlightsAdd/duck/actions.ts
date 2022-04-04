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
export const editStory = createAsyncThunk<any, any>(
  "highlisghts/storyEdit",
  async (story, { rejectWithValue }) => {
    let file, upload, cloudUrl
    if (!story.imageUrl.includes('cdn-dev.vzletaem')) {
      file = await fetch(story.imageUrl).then(r => r.blob()).then(blobFile => new File([blobFile], "storyImage", { type: "image/png" }))
      upload = await highlightsService.addStoryImage(file)
      cloudUrl = upload.data[0].cloudUrl
    } else {
      cloudUrl = story.imageUrl
    }
    if (!cloudUrl) return rejectWithValue("error");
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
  async ({ highlight, stories, history }, { rejectWithValue }) => {
    if (!stories.length) return rejectWithValue('Нет сториз')
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

export const updateHighlight = createAsyncThunk<any, any>(
  "highlisghts/update",
  async ({ highlight, history }, { getState, rejectWithValue }) => {
    const state: any = getState()
    const stories = state.highlights.stories
    if (!stories.length) return rejectWithValue('Нет сториз')
    await highlightsService.updateHighlight(highlight);
    await highlightsService.updateStories(stories, highlight.highlightId);
    history.push('/highlights')
    return
  }
);

export const bootstrap = createAsyncThunk<any, any>(
  "highlisghts/bootstrap",
  async ({ id }, { rejectWithValue }) => {
    const res = await highlightsService.createHighlight(id);
    if (!res) return rejectWithValue("error");
    return res;
  }
);
