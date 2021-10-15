import styled from "styled-components";
import { InputCss } from "parts/mixins";

export const StyledTime = styled.div`
  .rc-time-picker {
    display: flex;
    align-items: center;
  }
  a {
    display: none;
  }
  input {
    ${InputCss}
    padding-left: 0;
    text-align: center;
    color: #000;
  }
`;
