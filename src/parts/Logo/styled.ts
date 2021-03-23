import styled from "styled-components";
import logoImg from "./assets/logo_image.svg";
import logoText from "./assets/logo_text.svg";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0;
`;
export const LogoImage = styled.div`
  display: inline-block;
  width: 82px;
  height: 76px;
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 8px;
`;
export const LogoText = styled.div`
  display: inline-block;
  width: 136px;
  height: 27px;
  background-image: url(${logoText});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Comfortaa";
  font-weight: 700;
  font-size: 15px;
`;
