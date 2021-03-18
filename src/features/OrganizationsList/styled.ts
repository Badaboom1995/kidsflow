import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px 25px;
  width: 400px;
  height: 650px;
  overflow: scroll;
  border-radius: 15px;
  box-shadow: 0px 4px 15px 0px #00000032;
`;
export const List = styled.div`
  margin-bottom: 60px;
  width: 100%;
`;
type ItemProps = {
  choosed?: boolean;
};
export const Item = styled.div<ItemProps>`
  border-bottom: 1px solid
    ${(props) => (props.choosed ? "#e8eaee" : "transparent")};
  margin-bottom: 10px;
  cursor: pointer;
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 5px;
`;
export const Subtitle = styled.span`
  display: block;
  color: #bec2ce;
  font-size: 10px;
  margin-bottom: 5px;
`;
export const Adress = styled.p`
  font-size: 12px;
  margin: 0 0 10px;
`;
export const ViewMore = styled.div`
  position: absolute;
  bottom: 30px;
`;
