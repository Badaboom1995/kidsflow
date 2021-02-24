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
  width: 60%;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ColTitle = styled.h3``;
export const TextLink = styled.a`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
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
export const Description = styled.div``;
