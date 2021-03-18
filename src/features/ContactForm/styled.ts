import styled from "styled-components";
import Select from "parts/Select";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 677px;
  background-color: #fff;
  padding: 50px 65px;
  border-radius: 15px;
  left: 50%;
  top: 225px;
  transform: translateX(-50%);
  box-shadow: 0px 4px 15px 0px #00000032;
`;
export const Row = styled.div`
  display: flex;
  margin-bottom: 22px;
`;
export const Label = styled.span`
  width: 170px;
  font-size: 16px;
  font-weight: 400;
  padding-top: 15px; ;
`;
export const StyledSelect = styled(Select)`
  flex-grow: 1;
  display: none !important;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
