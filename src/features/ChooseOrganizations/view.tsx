import React, { useEffect } from 'react';
import { Wrapper } from './styled';
import AddButton from './components/AddButton';
import OrganizationCard from './components/OrganizationCard';
import { useSelector } from 'react-redux';
import { RootState } from 'index';

function ChooseOrganizationsView({ callback, setFieldValue, name }) {
  const organizations = useSelector(
    (state: RootState) => state.organizationsPicker.entities
  );
  useEffect(() => {
    const organizationsIds = organizations.map(
      (organization) => organization.organizationId
    );
    callback(organizationsIds);
    setFieldValue(name, organizationsIds.concat());
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
