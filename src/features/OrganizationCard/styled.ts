import styled from "styled-components";

export const Wrapper = styled.div`
  width: 570px;
  box-sizing: border-box;
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 4px 15px 0px #00000032;
`;
export const Left = styled.div`
  width: 58%;
  margin-right: 2%;
`;
export const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
export const Address = styled.div`
  margin-bottom: 25px;
`;
export const Cover = styled.div`
  position: relative;
  width: 210px;
  height: 210px;
  flex-grow: 1;
  overflow: hidden;

  img {
    position: absolute;
    width: 210px;
    height: 210px;
    top: 0;
    left: 50%;
    border-radius: 15px;
    transform: translateX(-50%);
    background-color: #ccc;
  }
`;
export const AddressText = styled.div`
  font-size: 17px;
`;
export const Main = styled.div`
  margin-bottom: 20px;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;
export const SiteLink = styled.div`
  text-decoration: underline;
`;
export const Schedule = styled.div``;

export const ScheduleText = styled.div``;
export const Number = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 120px;
`;
export const ToggleButton = styled.div`
  position: absolute;
  right: 20px;
  top: 3px;
  padding: 15px 0;
  cursor: pointer;
`;
type PhoneProps = {
  closed?: boolean;
};

export const Phone = styled.div<PhoneProps>`
  position: relative;
  padding: 7px;
  background-color: #f2f2f2;
  border-radius: 15px;
  ${Number} {
    width: ${(props) => (props.closed ? "55%" : "100%")};
  }
  ${ToggleButton} {
    display: ${(props) => (props.closed ? "block" : "none")};
  }
`;
