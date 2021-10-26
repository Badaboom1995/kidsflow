import React from "react";
import { Wrapper, Content, Image, Sign } from "./styled";
import search from "./assets/search.png";

function Loader() {
  return (
    <Wrapper>
      <Content>
        <Image src={search} />
        <Sign>Секундочку..</Sign>
      </Content>
    </Wrapper>
  );
}
export default Loader;
