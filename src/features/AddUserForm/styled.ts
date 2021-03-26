import { GlassCard } from "parts/styled";
import styled from "styled-components";
import plus from "assets/plus.svg";

export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Footer = styled.div`
  display: flex;
`;
export const StatusSection = styled.div`
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const Top = styled.div`
  grid-column: span 12;
  padding-left: 60px;
`;
export const Left = styled.div`
  grid-column: span 7;
`;
export const Right = styled.div`
  grid-column: span 3;
  padding-left: 30px;
`;
export const Title = styled.h2`
  grid-column: span 12;
  width: 100%;
  text-transform: uppercase;
  color: #51535e;
  font-weight: 500;
  font-size: 16px;
`;
type ItemProps = { col?: number };
export const Item = styled.div<ItemProps>`
  grid-column: span ${(props) => props.col || 6};
  padding: 0 10px;
  margin-bottom: 15px;
`;
export const Section = styled(GlassCard)`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const AddFormButton = styled.button`
  border: none;
  display: block;
  text-align: left;
  position: relative;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 10px;
  width: 212px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  background-color: transparent;
  line-height: 24px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 25px;
    height: 25px;
    transform: translateY(-50%);
    background-image: url(${plus});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const ChildArea = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const ChildData = styled(GlassCard)`
  width: 212px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
  padding: 20px;
`;
export const Name = styled.div`
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
`;
export const ChildType = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
export const Interests = styled(GlassCard)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: 40px;
  min-height: 80px;
`;
export const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
export const MediaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;
