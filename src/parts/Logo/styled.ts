import styled from "styled-components";
import logoImg from "./assets/logo_image.svg";
import logoText from "./assets/logo_text.svg";

type LogoImageProps = { big?: boolean };
export const LogoImage = styled.div<LogoImageProps>`
  display: inline-block;
  width: 82px;
  height: 76px;
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 8px;
`;
type LogoTextProps = { big?: boolean };
export const LogoText = styled.div<LogoTextProps>`
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
type WrapperProps = { big?: boolean };
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  ${LogoImage} {
    width: ${(props) => props.big && "120"}px;
    height: ${(props) => props.big && "100"}px;
  }
  ${LogoText} {
    width: ${(props) => props.big && "230"}px;
    height: ${(props) => props.big && "40"}px;
  }
`;
