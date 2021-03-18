import React from "react";
import { Wrapper, LogoImage, LogoText } from "./styled";

interface ILogo {
  onClick?: () => void;
}

function Logo({ onClick }: ILogo) {
  return (
    <Wrapper to="/" onClick={onClick}>
      <LogoImage />
      <LogoText />
    </Wrapper>
  );
}
export default Logo;
