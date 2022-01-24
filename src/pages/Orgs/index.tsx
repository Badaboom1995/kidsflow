import React from 'react';
import { Wrapper } from './styled';
import OrganizationsTable from 'features/OrganizationsTable';
import { useHistory } from 'react-router';
import AddButton from 'parts/AddButton';

function Organizations() {
  const history = useHistory();
  const onRowClick = (entity: any) => {
    history.push(`/orgs/add-org/${entity.organizationId}`);
  };
  return (
    <Wrapper>
      <AddButton to={`/orgs/add-org`} />
      <OrganizationsTable onRowClick={onRowClick} />
    </Wrapper>
  );
}
export default Organizations;
