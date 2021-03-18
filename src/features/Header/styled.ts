import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  z-index: 1;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 1440px;
  margin: 0 auto;
`;
export const Search = styled.div`
  flex-grow: 1;
`;
export const SearchForm = styled.div`
  max-width: 575px;
`;
export const Buttons = styled.div``;
export const Button = styled.a`
  font-size: 20px;
  padding: 19px 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const Partner = styled(Button)`
  font-weight: 500;
`;
export const Enter = styled(Button)`
  font-weight: 400;
`;
