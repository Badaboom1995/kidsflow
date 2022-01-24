import React, { useEffect } from 'react';
import { Wrapper } from './styled';
import AddButton from './components/AddButton';
import OrganizationCard from './components/OrganizationCard';
import { useSelector } from 'react-redux';
import { RootState } from 'index';

function ChooseOrganizationsView() {
  const organizations = useSelector(
    (state: RootState) => state.organizationsPicker.entities
  );
  useEffect(() => {
    console.log(organizations);
  }, [organizations]);
  return (
    <Wrapper>
      <AddButton />
      {organizations.map((organization) => (
        <OrganizationCard organization={organization} />
      ))}
    </Wrapper>
  );
}
export default ChooseOrganizationsView;
