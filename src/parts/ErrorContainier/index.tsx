import React from "react";
import { Wrapper, ErrorText } from "./styled";

interface ErrorContainierInterface {
  error?: string;
  children: React.ReactNode;
}
function ErrorContainier({ error, children }: ErrorContainierInterface) {
  return (
    <Wrapper>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}
export default ErrorContainier;
