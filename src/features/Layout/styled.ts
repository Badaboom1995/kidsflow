import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
  overflow: hidden;
  background: linear-gradient(180deg, #fed98e 0%, #fdb67f 50%, #fd9693 100%);
`;
export const Body = styled.div`
  flex-grow: 1;
  max-width: calc(100vw - 150px);
  box-sizing: border-box;
  padding: 25px 20px;
  overflow: scroll;
`;
