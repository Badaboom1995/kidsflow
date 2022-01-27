import React from 'react';
import { Wrapper, Photo, Field, Cell, RemoveButton } from './styled';
import { OrganizationType } from 'features/OrganizationsTable/duck/types';

function OrganizationCard({
  organization,
}: {
  organization: OrganizationType;
}) {
  const { name, ageFrom, ageTo } = organization;
  return (
    <Wrapper>
      <Cell>
        <Photo />
      </Cell>
      <Cell>
        <Field>{name}</Field>
      </Cell>
      <Cell>
        <Field>Творческий центр</Field>
      </Cell>
      <Cell>
        <Field>Вокал, фортепиано</Field>
      </Cell>
      <Cell>
        <Field>
          {ageFrom}-{ageTo}
        </Field>
      </Cell>
      <Cell>
        <RemoveButton type="button" />
      </Cell>
    </Wrapper>
  );
}
export default OrganizationCard;
