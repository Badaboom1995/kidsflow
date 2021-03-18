import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0px;
  height: 100vh;
  z-index: 10;
  padding: 20px 80px;
  padding-left: calc((100vw - 1440px) / 2);
  background-color: #fff;
  transition: 0.3s all ease;
  overflow: scroll;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 180px;
`;
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  padding-bottom: 100px;
  border-bottom: 1px solid #bbb;
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  padding: 20px 0;
  font-size: 26px;
  &:visited {
    color: #000;
  }
`;
export const Footer = styled.div`
  padding: 30px 0;
`;
export const Text = styled.p`
  font-size: 16px;
  max-width: 330px;
  margin-bottom: 25px;
`;
