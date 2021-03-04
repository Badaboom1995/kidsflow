import React from "react";
import { Wrapper, Head, NavList, NavItem, Footer, Text } from "./styled";
import Logo from "parts/Logo";
import MenuToggle from "parts/MenuToggle";
import { Overlay } from "parts/styled";
import { selectIsOpen } from "./duck/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "./duck/slice";
import DownloadLinks from "parts/DownloadLinks";

function NavigationView() {
  const isOpen = useSelector(selectIsOpen());
  const dispatch = useDispatch();
  return (
    <Overlay closed={isOpen}>
      <Wrapper>
        <Head>
          <MenuToggle
            open={isOpen}
            onClick={() => {
              dispatch(toggleOpen());
            }}
          />
          <Logo />
        </Head>
        <NavList>
          <NavItem>Новости</NavItem>
          <NavItem>Партнерам</NavItem>
          <NavItem>Карта</NavItem>
          <NavItem>Вопросы и ответы</NavItem>
          <NavItem>Условия использования</NavItem>
        </NavList>
        <Footer>
          <Text>
            Скачивайте наше приложение,
            <br /> чтобы получить больше возможностей
          </Text>
          <DownloadLinks big />
        </Footer>
      </Wrapper>
    </Overlay>
  );
}
export default NavigationView;
