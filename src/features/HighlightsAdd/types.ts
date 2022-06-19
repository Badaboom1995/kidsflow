export type StoryType = {
    imageUrl: string,
    type: '0' | '1',
    order: string
}
export type HighlighType = {
    isActive: '0' | '1',
    emoji?: string,
    stories: StoryType[],
    borderColor?: string,
    title?: string
}