import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: calc(100vh - 130px);
  box-sizing: border-box;
`;
export const Head = styled.div`
  grid-column: span 12;
`;
export const Left = styled.div`
  grid-column: span 8;
`;
export const Right = styled.div`
  padding-left: 30px;
  padding-right: 20px;
  grid-column: span 4;
`;
export const Uploads = styled.div`
  display: flex;
  flex-wrap: wrap;
  label {
    margin-right: 10px;
  }
`;
export const Footer = styled.div`
  grid-column: span 12;

  align-self: end;
`;
