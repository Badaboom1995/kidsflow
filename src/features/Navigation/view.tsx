import React from "react";
import {
  Wrapper,
  Head,
  NavList,
  NavItem,
  Footer,
  Text,
  Links,
  LinkItem,
} from "./styled";
import Logo from "parts/Logo";
import MenuToggle from "parts/MenuToggle";
import { Overlay } from "parts/styled";
import { INavigation } from "./index";

function NavigationView({ closed, toggle }: INavigation) {
  return (
    <Overlay closed={closed}>
      <Wrapper>
        <Head>
          <MenuToggle closed onClick={toggle} />
          <Logo />
        </Head>
        <NavList>
          <NavItem></NavItem>
        </NavList>
        <Footer>
          <Text></Text>
          <Links>
            <LinkItem></LinkItem>
          </Links>
        </Footer>
      </Wrapper>
    </Overlay>
  );
}
export default NavigationView;
