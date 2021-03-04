import styled from "styled-components";

export const Download = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
type DownloadLinkProps = {
  src: string;
  big?: boolean;
};
export const DownloadLink = styled.a<DownloadLinkProps>`
  display: inline-block;
  width: ${(props) => (props.big ? "170px" : "136px")};
  height: ${(props) => (props.big ? "50px" : "40px")};
  margin-right: 20px;
  border-radius: 5px;
  background-color: #fff;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
