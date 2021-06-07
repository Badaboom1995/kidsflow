import styled from "styled-components";
import { Form } from "formik";

export const Wrapper = styled.div`
  width: 100%;
`;
export const FormContainer = styled(Form)`
  display: flex;
  /* width: 80%; */
  border-radius: 10px;
  label {
    padding: 9px;
  }
`;
export const Small = styled.div`
  width: 25%;
  label {
    padding-right: 20px;
    margin-right: -15px;
  }
`;
export const Big = styled.div`
  width: 75%;
`;
