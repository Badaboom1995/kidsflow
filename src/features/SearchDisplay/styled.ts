import styled from "styled-components";
import Button from "parts/Button";

export const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #bbb;
`;
export const ButtonsContainer = styled.div`
  display: flex;
`;
export const SearchButton = styled(Button)`
  margin-right: 20px;
  display: none;
`;
