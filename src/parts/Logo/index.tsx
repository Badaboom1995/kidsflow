import React from "react";
import { Wrapper, LogoImage, LogoText } from "./styled";

interface ILogo {
  onClick?: () => void;
  big?: boolean;
}

function Logo({ onClick, big }: ILogo) {
  return (
    <Wrapper onClick={onClick} big={big}>
      <LogoImage />
      <LogoText />
    </Wrapper>
  );
}
export default Logo;
