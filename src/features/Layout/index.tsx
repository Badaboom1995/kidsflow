import React, { useState } from "react";
import { Wrapper, Container } from "./styled";
import Header from "features/Header";
import Navigation from "features/Navigation";
import Footer from "features/Footer";

type ILayout = {
  children: React.ReactNode;
};
function Layout({ children }: ILayout) {
  const [isNavClosed, setNavClosed] = useState(true);
  const toggleNav = () => {
    setNavClosed(!isNavClosed);
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <Navigation closed={isNavClosed} toggle={toggleNav} />
        {children}
      </Container>
      <Footer />
    </Wrapper>
  );
}
export default Layout;
