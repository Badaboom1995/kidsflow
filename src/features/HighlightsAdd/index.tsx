import React from 'react';
import HighlightsAddView from './view';

import { useSelector } from 'react-redux';
import { selectSortedStories } from './duck/selectors';
import { useDispatch } from 'react-redux';
import { createHighlight } from './duck/actions';
import { removeStory } from './duck/slice';
import { useHistory } from 'react-router';

function HighlightsAdd() {
  const dispatch = useDispatch();
  const history = useHistory();
  const stories = useSelector(selectSortedStories);

  return (
    <HighlightsAddView
      stories={stories}
      createHighlight={(highlight) => {
        highlight.isActive = !!parseInt(highlight.isActive);
        highlight.defaultSlideDuration = 2000;
        dispatch(createHighlight({ stories, highlight, history }));
      }}
      removeStory={(id) => {
        dispatch(removeStory(id));
      }}
    />
  );
}
export default HighlightsAdd;
