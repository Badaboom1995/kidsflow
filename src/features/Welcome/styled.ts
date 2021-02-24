import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;
export const Description = styled.div`
  padding-top: 200px;
  max-width: 595px;
`;
export const Title = styled.h1`
  font-size: 90px;
  font-weight: 300;
  margin-bottom: 25px;
`;
export const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
`;
export const Paragraph = styled.p`
  font-size: 20px;
`;
export const Controls = styled.div``;

type DotProrps = {
  active?: boolean;
};
export const Dot = styled.span<DotProrps>`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FF5858" : "#dfe0e4")};
  margin-right: 5px;
  cursor: pointer;
`;
export const Picture = styled.div`
  max-width: 580px;
  img {
    width: 100%;
  }
`;
