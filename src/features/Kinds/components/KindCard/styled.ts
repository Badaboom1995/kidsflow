import styled from "styled-components";

type WrapperProps = {
  active: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  background-color: ${(props) => props.active && "#FF5A57"};
  border-radius: 15px;
  padding: 5px 0px;
  width: 208px;
  cursor: pointer;
  transition: 0.2s all ease;
`;

type InnerProps = {
  background: string;
};
export const Inner = styled.div<InnerProps>`
  background-image: url(${(props) => props.background || ""});
  position: relative;
  text-align: center;
  border-radius: 15px;
  background-color: #ccc;
  width: 208px;
  height: 154px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
export const Name = styled.span`
  color: #fff;
`;
export const Icon = styled.img``;
