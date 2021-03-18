import React from "react";
import { Wrapper, Body } from "./styled";
import Navigation from "features/Navigation";

type ILayout = {
  children: React.ReactNode;
};
function Layout({ children }: ILayout) {
  return (
    <Wrapper>
      <Navigation />
      <Body>{children}</Body>
    </Wrapper>
  );
}
export default Layout;
