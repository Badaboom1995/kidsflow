import styled from "styled-components";
import DatePicker from "react-datepicker";
import { InputCss } from "parts/mixins";

export const StyledDate = styled(DatePicker)`
  ${InputCss}
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
  padding: 11px;
  text-align: center;
`;
