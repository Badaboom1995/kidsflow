import React from 'react';
import HighlightsAddView from './view';

import { useSelector } from 'react-redux';
import { selectSortedStories } from './duck/selectors';
import { useDispatch } from 'react-redux';
import { createHighlight, updateHighlight } from './duck/actions';
import { removeStory } from './duck/slice';
import { useBootstrap } from 'hooks/useBootstrap';
import { useHistory } from 'react-router';


function HighlightsAdd() {
  const dispatch = useDispatch();
  const stories = useSelector(selectSortedStories);
  const history = useHistory();
  const { method, id } = useBootstrap(
    (id) => {
      console.log(id);
    },
    createHighlight,
    updateHighlight
  );

  return (
    <HighlightsAddView
      stories={stories}
      createHighlight={(highlight) => {
        highlight.isActive = !!parseInt(highlight.isActive);
        highlight.defaultSlideDuration = 2000;
        highlight.highlightId = id;
        dispatch(method({ stories, highlight, history }));
      }}
      removeStory={(id) => {
        dispatch(removeStory(id));
      }}
    />
  );
}
export default HighlightsAdd;
