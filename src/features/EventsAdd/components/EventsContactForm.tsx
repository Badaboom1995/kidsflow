import Input from "parts/Input";
import { GridContainer, GridElement } from "parts/styled";
import React from "react";

function EventsContactForm() {
  return (
    <GridContainer>
      <GridElement>
        <Input label="Адрес" name="address" />
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
