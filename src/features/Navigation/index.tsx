import React, { useState } from "react";
import {
  Wrapper,
  Head,
  NavList,
  Footer,
  Profile,
  Avatar,
  Name,
  Exit,
} from "./styled";
import Logo from "parts/Logo";
import NavItem from "./components/NavItem";
import avo from "./assets/avo.png";

function Navigation() {
  const initialState = [
    {
      label: "Управление каталогом",
      to: `/catalog`,
      iconId: "cast",
      color: "#FEC586",
      active: true,
    },
    {
      label: "Пользователи",
      to: `/users`,
      iconId: "users",
      color: "#FCBF83",
      active: false,
    },
    {
      label: "Организации",
      to: `/orgs`,
      iconId: "orgs",
      color: "#FDB880",
      active: false,
    },
    {
      label: "События",
      to: `/events`,
      iconId: "events",
      color: "#FDB381",
      active: false,
    },
    {
      label: "Поддержка",
      to: `/support`,
      iconId: "support",
      color: "#FDA987",
      active: false,
    },
    {
      label: "Подборки",
      to: `/org-compilations`,
      iconId: "support",
      color: "#FDA987",
      active: false,
    },
  ];
  const [menuItems, setItems] = useState(initialState);
  const setActive = (label: string) => {
    setItems(
      menuItems?.map((item) => {
        if (!item.active && item.label !== label) return item;
        return item.active
          ? { ...item, active: false }
          : { ...item, active: true };
      })
    );
  };
  return (
    <Wrapper>
      <Head>
        <Logo />
      </Head>
      <NavList>
        {menuItems?.map(({ label, to, iconId, active }) => (
          <NavItem
            key={label}
            to={to}
            iconId={iconId}
            color={"#FFF8E9"}
            active={active}
            onClick={() => {
              if (!active) setActive(label);
            }}
          >
            {label}
          </NavItem>
        ))}
      </NavList>
      <Footer>
        <Profile>
          <Avatar src={avo} />
          <Name>Петров</Name>
          <Name>Константин</Name>
        </Profile>
        <Exit>Выход</Exit>
      </Footer>
    </Wrapper>
  );
}
export default Navigation;
