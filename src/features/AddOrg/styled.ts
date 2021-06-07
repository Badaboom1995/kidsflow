import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 35px);
`;
export const Header = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const MainArea = styled.div`
  flex-grow: 1;
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
export const Docs = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Partners = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: -20px;
  margin-bottom: 20px;
`;
export const PartnersField = styled.div`
  width: calc(50% - 10px);
`;
