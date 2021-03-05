import React from "react";
import { Wrapper, Body } from "./styled";
import Header from "features/Header";
import Navigation from "features/Navigation";
import Footer from "features/Footer";

type ILayout = {
  children: React.ReactNode;
};
function Layout({ children }: ILayout) {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Body>{children}</Body>
      <Footer />
    </Wrapper>
  );
}
export default Layout;
