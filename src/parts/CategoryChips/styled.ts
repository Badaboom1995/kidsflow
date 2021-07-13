import styled from "styled-components";
import {Field} from "formik";

export const Wrapper = styled.div``;

export const CategoryChipsTitle = styled.p `
  padding-left: 40px;
  margin: 0 0 10px 0;
  font-family: "Muli",sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export const CategoryChipsText = styled.p`
  color: rgba(37,39,51,0.5);
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
`;

export const CategoryChipsList = styled.div `
  display: flex;
  flex-wrap: wrap;
  max-height: 375px;
  overflow-y: auto;
`;

export const CategoryChipsItem = styled.span `
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #FFEAA7;
  border-radius: 6px;
  border: 1px solid #FFEAA7;
  cursor: pointer;
  &.active{
    border-color: #ffc402;
    background-color: #fff7dd;
  }
  svg{
    margin-right: 7px;
  }
`;

export const HiddenCheckbox = styled(Field)`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
