import React from "react";
import { Wrapper, SearchList, SearchCard } from "./styled";
import Map from "features/Map";
import OrganizationsList from "features/OrganizationsList";
import OrganizationCard from "features/OrganizationCard";

function Promo() {
  return (
    <Wrapper>
      <SearchList>
        <OrganizationsList />
      </SearchList>
      {/* <SearchCard>
        <OrganizationCard />
      </SearchCard> */}
      <Map />
    </Wrapper>
  );
}
export default Promo;
