import React from "react";
import { Wrapper, List, Item, Title, Adress, ViewMore } from "./styled";
import { MainSubtitle } from "parts/typography";
import Button from "parts/Button";
import { OrganizationType } from "ducks/organizations/types";

interface IOrganizationsListView {
  items?: OrganizationType[];
  chooseOrg: (id: string) => void;
  isOpen: boolean;
  setOpen: (p: boolean) => void;
}

function OrganizationsListView({
  items,
  chooseOrg,
  isOpen,
  setOpen,
}: IOrganizationsListView) {
  return (
    <Wrapper>
      <List>
        {(isOpen ? items : items.slice(0, 7))?.map((item) => (
          <Item
            onClick={() => {
              chooseOrg(item?.id);
            }}
            choosed={item.choosed}
          >
            <Title>{item.name}</Title>
            <MainSubtitle>Адрес</MainSubtitle>
            <Adress>{item.address}</Adress>
          </Item>
        ))}
      </List>
      {!isOpen && (
        <ViewMore>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Смотреть больше
          </Button>
        </ViewMore>
      )}
    </Wrapper>
  );
}
export default OrganizationsListView;
