import styled from "styled-components";
import { Container } from "parts/styled";

export const Wrapper = styled(Container)`
  padding-top: 50px;
`;
export const Item = styled.div`
  display: flex;
  margin: 40px 0;
`;
export const Cover = styled.img`
  width: 265px;
  box-sizing: border-box;
  height: 200px;
  border-radius: 10px;
  margin-right: 40px;
  background-color: #ccc;
`;

export const Content = styled.div`
  width: calc(100% - 265px);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;
export const Date = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
`;
