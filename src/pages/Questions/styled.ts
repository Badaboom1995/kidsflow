import styled from "styled-components";
import { Container } from "parts/styled";

export const Wrapper = styled(Container)`
  padding: 50px 250px;
  box-sizing: border-box;
`;
export const Question = styled.div`
  border-bottom: 1px solid #bbbbbb;
  padding: 20px 0;
`;
export const QuestionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;
export const QuestionText = styled.p`
  max-width: 700px;
`;
