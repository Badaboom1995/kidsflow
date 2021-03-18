import React from "react";
import { Wrapper, ButtonsContainer } from "./styled";
import { MainTitle } from "parts/typography";
import Button from "parts/Button";

//TODO
interface ISearchDisplayView {
  kinds: any[];
}

function SearchDisplayView({ kinds }: ISearchDisplayView) {
  return (
    <Wrapper>
      <MainTitle align="left">Организации по направлениям на карте</MainTitle>
      <ButtonsContainer>
        {kinds.map((item) => (
          <Button inline type="transparent" size="small">
            {item.name}
          </Button>
        ))}
      </ButtonsContainer>
    </Wrapper>
  );
}
export default SearchDisplayView;
