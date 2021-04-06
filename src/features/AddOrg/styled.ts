import styled from "styled-components";
export const Wrapper = styled.div``;
export const MainArea = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
  label {
    margin-right: 25px;
  }
`;
export const Left = styled.div`
  grid-column: span 7;
`;
export const Right = styled.div`
  grid-column: span 4;
  padding-left: 30px;
`;
export const Partner = styled.div`
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 100%;
`;
