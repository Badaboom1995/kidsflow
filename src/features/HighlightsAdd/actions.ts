import highlightsService from "services/highlights"
import DataBuilder, { enrichData } from "utils/dataBuilder";
import { IBootstrap } from 'hooks/useBootstrap'

export const highlightActions: IBootstrap = {
    getEntity: async (id) => {
        const highlight = await highlightsService.getHighlightById(id);
        return new DataBuilder(highlight)
            .only(['title', 'emoji', 'isActive', 'stories'])
            .only(['imageUrl', 'type', 'order', 'storyId'], 'stories')
            .allToString()
            .allToString('stories').data;
    },
    onCreate: async ({ entity }) => {
        const builder = new DataBuilder(entity);
        const { highlight, stories } = builder
            .normalize({
                isActive: (self) => !!parseInt(self),
                defaultSlideDuration: () => 2000,
            })
            .split(['stories'], 'highlight').data;

        const { highlightId } = await highlightsService.createHighlight(
            highlight
        );

        await highlightsService.createStories(
            enrichData(stories, 'highlightId', highlightId)
        );
    },
    onUpdate: async ({ id, builder }) => {
        console.log(builder.data)
        const { stories, highlight } = builder
            .normalize({
                storyId: (value) => parseInt(value),
                highlightId: () => id,
                isActive: (value) => (value === '0' ? false : true),
            })
            .split(['stories'], 'highlight').data;

        if (!stories.length) throw new Error('Добавьте сториз');
        await highlightsService.updateHighlight(highlight);
        await highlightsService.updateStories(stories, id);
    },
}
