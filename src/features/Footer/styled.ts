import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding-top: 40px;
  padding-bottom: 30px;
`;
export const Links = styled.div`
  display: flex;
  border-bottom: 1px solid #000;
  padding: 20px 0;
  margin-bottom: 20px;
`;
export const InfoLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 53%;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ColTitle = styled.h3``;

type TextLinkProps = {
  icon?: string;
};
export const TextLink = styled.a<TextLinkProps>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:before {
    content: "";
    display: ${(props) => (props.icon ? "inline-block" : "none")};
    margin-right: 5px;
    width: 20px;
    height: 20px;
    background-image: url(${(props) => props.icon});
  }
`;
export const Download = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
type DownloadLinkProps = {
  src: string;
};
export const DownloadLink = styled.a<DownloadLinkProps>`
  display: inline-block;
  width: 136px;
  height: 40px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: #fff;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const Extra = styled.div`
  display: flex;
`;
export const BottomLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin-right: auto;
`;
export const Description = styled.p`
  max-width: 34%;
  margin: 0;
  margin-right: auto;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  span {
    font-weight: 500;
  }
`;
