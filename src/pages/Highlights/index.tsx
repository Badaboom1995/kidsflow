import React from 'react';
import { Wrapper } from './styled';
import HighlightsTable from 'features/HighlightsTable';
import AddButton from 'parts/AddButton';

function Highlights() {
  return (
    <Wrapper>
      <AddButton to={`/highlights/add`} />
      <HighlightsTable />
    </Wrapper>
  );
}
export default Highlights;
