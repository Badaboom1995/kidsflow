import styled from "styled-components";

type MainTitleProps = {
  small?: boolean;
  align?: string;
};
export const MainTitle = styled.h2<MainTitleProps>`
  width: 100%;
  font-size: 20px;
  text-transform: ${(props) => !props.small && "uppercase"};
  text-align: ${(props) => props.align || "center"};
  font-weight: 400;
  margin: 0;
  margin-bottom: 15px;
`;
export const MainSubtitle = styled.span`
  display: block;
  color: #bec2ce;
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const SectionSubtitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;
