import React from "react";
import { Wrapper, Head, NavList, NavItem, Footer, Text } from "./styled";
import Logo from "parts/Logo";
import { Overlay } from "parts/styled";
import { selectIsOpen } from "./duck/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "./duck/slice";

function Navigation() {
  const isOpen = useSelector(selectIsOpen());
  const dispatch = useDispatch();
  const hideNavigation = () => {
    dispatch(toggleOpen());
  };
  return (
    <Overlay closed={isOpen}>
      <Wrapper>
        <Head>
          <Logo onClick={hideNavigation} />
        </Head>
        <NavList onClick={hideNavigation}>
          <NavItem to="/news">Новости</NavItem>
          <NavItem to="">Партнерам</NavItem>
          <NavItem to="/search">Карта</NavItem>
          <NavItem to="/faq">Вопросы и ответы</NavItem>
          <NavItem to="">Условия использования</NavItem>
        </NavList>
        <Footer>
          <Text>
            Скачивайте наше приложение,
            <br /> чтобы получить больше возможностей
          </Text>
        </Footer>
      </Wrapper>
    </Overlay>
  );
}
export default Navigation;
