import React from "react";
import { Wrapper } from "./styled";
import Welcome from "features/Welcome";
import Kinds from "features/Kinds";
import Categories from "features/Categories";
import Events from "features/Events";

function Main() {
  return (
    <Wrapper>
      <Welcome />
      <Kinds />
      <Categories />
      <Events />
    </Wrapper>
  );
}
export default Main;
