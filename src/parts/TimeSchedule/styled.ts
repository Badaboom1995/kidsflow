import styled from "styled-components";
import {Field} from "formik";

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
  font-family: "Muli",sans-serif;
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
  color: #ff5859;
  text-decoration: underline;
  cursor: pointer;
`;

export const ScheduleCover = styled.div`
  background-color: #FFF0D3;
  padding: 25px 15px;
  border-radius: 12px;
`;

export const DaysCover = styled.div``;

export const DaysTitle = styled.p`
  margin: 0 0 10px 0;
  font-family: "Muli",sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export const DaysList = styled.div`
  display: flex;
`;

export const DaysItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child){
    margin-right: 10px;
  }
`;

export const DaysItemText = styled.span`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 12px 5px;
  background: #fff;
  min-width: 40px;
  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: .2s;
  &:hover{
    &:not(&.active){
      background: rgba(255,228,139,0.6)
    }
  }
  &.active{
    border-color: #FFC400;
    background-color: #FFE48B;
  }
`;

export const DaysItemIcon =  styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: 10px;
  background-color: #FFC400;
  border-radius: 50%;
  &:before{
    position: absolute;
    content: '';
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
  font-family: "Muli",sans-serif;
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
  .rc-time-picker{
    height: 38px;
    .rc-time-picker-input{
      height: 100%;
      width: 80px;
      text-align: center;
      font-size: 16px;
      line-height: 18px;
      color: #252733;
      letter-spacing: 1px;
    }
    .rc-time-picker-clear{
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
      &:before,  &:after{
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 10px;
        height: 2px;
        background-color: #b4b6c1;
        transition: .2s;
      }
      &:before{
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:after{
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:hover{
        &:before,  &:after{
          background-color: #FF7F79;
        }
      }
      .rc-time-picker-clear-icon{
        display: none;
        visibility: hidden;
      }
    }
  }
`;

export const DayOffCheckbox = styled(Field)``;

export const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  &:after{
    content: '';
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #bec2ce;
    border-radius: 3px;
  }
  span{
    display: inline-block;
    margin-right: 10px;
  }
  .checkbox{
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    &:checked + label{
      &:before {
        background-color: red !important;
      }
    }
  }
`;