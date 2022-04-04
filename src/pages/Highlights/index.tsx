import React from 'react';
import { Wrapper } from './styled';
import HighlightsTable from 'features/HighlightsTable';
import AddButton from 'parts/AddButton';
import { useParams } from 'react-router';

function Highlights() {
  const { id }: { id: string } = useParams();
  return (
    <Wrapper>
      <AddButton to={`/highlights/add`} />
      <HighlightsTable />
    </Wrapper>
  );
}
export default Highlights;
