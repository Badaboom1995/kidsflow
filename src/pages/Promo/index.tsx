import React from "react";
import { Wrapper } from "./styled";
import Welcome from "features/Welcome";
import Kinds from "features/Kinds";
import Categories from "features/Categories";
import Events from "features/Events";
import { Container } from "parts/styled";

function Promo() {
  return (
    <Wrapper>
      <Container>
        <Welcome />
        <Kinds />
      </Container>
      <Categories />
      <Container>
        <Events />
      </Container>
    </Wrapper>
  );
}
export default Promo;
