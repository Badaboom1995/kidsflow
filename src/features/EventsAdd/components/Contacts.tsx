import React from "react";
import Input from "parts/Input";
import { GridContainer, GridElement } from "parts/styled";
import Address from "parts/Address";

function EventsContactForm() {
  return (
    <GridContainer>
      <GridElement>
        <Address />
      </GridElement>
      <GridElement>
        <Input label="Телефон" name="phone" />
      </GridElement>
      <GridElement>
        <Input label="E-mail" name="email" />
      </GridElement>
      <GridElement>
        <Input label="Сайт" name="site" />
      </GridElement>
    </GridContainer>
  );
}

export default EventsContactForm;
