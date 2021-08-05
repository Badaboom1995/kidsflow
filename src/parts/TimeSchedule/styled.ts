import styled from "styled-components";
import { Field } from "formik";

const chooseDayApperance = ({
  active,
  completed,
}: {
  active: boolean;
  completed: boolean;
}) => {
  if (active) return { borderColor: "#FFC91A", backgroundColor: "#FFE48B" };
  if (completed)
    return {
      borderColor: "#00BFA5",
      backgroundColor: "#fff",
      color: "#00BFA5",
    };
  return { borderColor: "transparent", backgroundColor: "#fff" };
};

export const Wrapper = styled.div``;

export const TitleCover = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  padding-left: 40px;
  margin: 0;
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export const CloseForm = styled.button`
  padding: 3px 10px;
  background-color: transparent;
  border: 0;
  box-shadow: none;
  font-size: 12px;
  line-height: 14px;
  /* color: #ff5859; */
  text-decoration: underline;
  cursor: pointer;
`;

export const ScheduleCover = styled.div`
  background-color: #fff0d3;
  padding: 25px 15px;
  border-radius: 12px;
`;

export const DaysCover = styled.div``;

export const DaysTitle = styled.p`
  margin: 0 0 10px 0;
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export const DaysList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DaysItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

type TDaysItem = {
  active?: boolean;
  completed?: boolean;
};

export const DaysItemText = styled.span<TDaysItem>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 12px 5px;
  margin-bottom: 10px;
  background: #fff;
  min-width: 40px;
  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;

  border: 1px solid
    ${(props) =>
      chooseDayApperance({ active: props.active, completed: props.completed })
        .borderColor};
  background: ${(props) =>
    chooseDayApperance({ active: props.active, completed: props.completed })
      .backgroundColor};
  color: ${(props) =>
    chooseDayApperance({ active: props.active, completed: props.completed })
      .color};

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    &:not(&.active) {
      background: rgba(255, 228, 139, 0.6);
    }
  }
  &.active {
    border-color: #ffc400;
    background-color: #ffe48b;
  }
`;

export const DaysItemIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  background-color: #ffc400;
  border-radius: 50%;
  &:before {
    position: absolute;
    content: "";
    top: 45%;
    left: 50%;
    width: 8px;
    height: 4px;
    border-left: 2px solid #252733;
    border-bottom: 2px solid #252733;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const FormCover = styled.div`
  padding: 30px 0 0 0;
`;

export const FormTitle = styled.p`
  margin: 0 0 10px 0;
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export const FormTime = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const FormTimeTitle = styled.p`
  margin: 0 20px 0 0;
  min-width: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export const FormTimeField = styled.div`
  display: flex;
  .rc-time-picker {
    height: 38px;
    .rc-time-picker-input {
      height: 100%;
      width: 80px;
      text-align: center;
      font-size: 16px;
      line-height: 18px;
      color: #252733;
      letter-spacing: 1px;
    }
    .rc-time-picker-clear {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      top: 50%;
      left: calc(100% + 6px);
      right: unset;
      transform: translateY(-50%);
      border-radius: 50%;
      background-color: #ffffff;
      &:before,
      &:after {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        width: 10px;
        height: 2px;
        background-color: #b4b6c1;
        transition: 0.2s;
      }
      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:hover {
        &:before,
        &:after {
          background-color: #ff7f79;
        }
      }
      .rc-time-picker-clear-icon {
        display: none;
        visibility: hidden;
      }
    }
  }
`;

export const DayOffCheckbox = styled.input``;

export const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  /* &:after {
    content: "";
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #bec2ce;
    border-radius: 3px;
  } */
  .visibleControl {
    position: relative;
    display: inline-block;

    width: 18px;
    height: 18px;
    margin-left: 10px;
    background-color: #fff;
    border: 2px solid #bec2ce;
    border-radius: 3px;
    margin-right: 10px;

    transition: 0.3s all ease;
    cursor: pointer;
    &:before {
      content: "";
      display: none;
      position: absolute;
      left: 5px;
      top: 0px;
      width: 6px;
      height: 10px;
      border-right: 2px solid #000;
      border-bottom: 2px solid #000;

      transform: rotate(45deg);
    }
  }

  .checkbox {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    &:checked + .visibleControl {
      background-color: #ffc400 !important;
      border: 2px solid #ffc400;
      &:before {
        display: inline-block;
      }
    }
  }
`;

export const Time = styled.span`
  display: block;
  text-align: center;
  font-size: 10px;
`;
export const Rest = styled.span`
  display: block;
  text-align: center;
  font-size: 18px;
`;
export const SubmitTime = styled.button`
  display: inline-block;
  padding: 10px 15px;
  background-color: #ffc400;
  border: none;
  border-radius: 8px;
  margin-left: 10px;
`;
export const TimeField = styled.div`
  display: inline-block;
  margin-right: 15px;
`;
