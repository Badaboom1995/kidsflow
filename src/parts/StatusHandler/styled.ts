import styled from "styled-components";
import right from "assets/right.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const StatusArea = styled.div`
  position: relative;
  min-width: 155px;
`;
type StatusContainerProps = {
  open?: boolean;
};
export const StatusContainer = styled.div<StatusContainerProps>`
  padding: 7px 30px;
  padding-left: 40px;
  position: relative;
  border: 1px solid #9fa2b4;

  border-radius: 30px;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%) ${(props) => props.open && "rotate(180deg) "};
    width: 15px;
    height: 10px;
    background-image: url(${right});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  bottom: -15px;
  left: 0;
  transform: translateY(100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #fff;
  border-radius: 10px;
  z-index: 10;
`;
export const DropdownItem = styled.div`
  padding: 7px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
`;
