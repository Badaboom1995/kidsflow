import styled from "styled-components";
import { Form } from "formik";
import starts from "assets/big_stars.png";
import { darken } from "polished";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${starts});
  background-size: cover;
`;
export const FromArea = styled(Form)`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 275px;
  height: 300px;
  flex-direction: column;
  align-items: center;
`;
export const Fields = styled.div`
  width: 100%;
  padding: 35px 0;
`;
export const FieldLabel = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
`;
export const AuthButton = styled.button`
  width: 100%;
  padding: 17px;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  background-color: #ffc400;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  &:active {
    background-color: ${darken(0.02, "#FFC400")};
  }
`;
