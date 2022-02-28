import React, { useState } from 'react';
import {
  Wrapper,
  Head,
  NavList,
  Footer,
  Profile,
  Avatar,
  Name,
  Exit,
} from './styled';
import Logo from 'parts/Logo';
import NavItem from './components/NavItem';
import avo from './assets/avo.png';

function Navigation() {
  const initialState = [
    {
      label: 'Управление каталогом',
      to: `/catalog`,
      iconId: 'cast',
      active: true,
    },
    {
      label: 'Пользователи',
      to: `/users`,
      iconId: 'users',
      active: false,
    },
    {
      label: 'Организации',
      to: `/orgs`,
      iconId: 'orgs',
      active: false,
    },
    {
      label: 'События',
      to: `/events`,
      iconId: 'events',
      active: false,
    },
    {
      label: 'Поддержка',
      to: `/support`,
      iconId: 'support',
      active: false,
    },
    {
      label: 'Подборки',
      to: `/compilations`,
      iconId: 'support',
      active: false,
    },
    {
      label: 'Хайлайтс',
      to: `/highlights`,
      iconId: 'highlights',
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
            color={'#FFF8E9'}
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
