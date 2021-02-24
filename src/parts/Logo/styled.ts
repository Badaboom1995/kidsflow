import styled from "styled-components";
import logoImg from "./assets/logo_image.svg";
import logoText from "./assets/logo_text.svg";

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 40px;
`;
export const LogoImage = styled.div`
  display: inline-block;
  width: 67px;
  height: 61px;
  background-image: url(${logoImg});
  margin-right: 15px;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const LogoText = styled.div`
  display: inline-block;
  width: 136px;
  height: 27px;
  background-image: url(${logoText});
  background-size: contain;
  background-repeat: no-repeat;
`;
