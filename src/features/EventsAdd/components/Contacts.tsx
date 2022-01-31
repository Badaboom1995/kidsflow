import React from 'react';
import Input from 'parts/Input';
import { GridContainer, GridElement } from 'parts/styled';
import Address from 'parts/Address';

function EventsContactForm() {
  return (
    <GridContainer>
      <GridElement>
        <Address name="place" />
      </GridElement>
    </GridContainer>
  );
}

export default EventsContactForm;
