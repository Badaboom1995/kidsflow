import React from "react";
import { Wrapper } from "./styled";

interface ErrorContainierInterface {
  error?: string;
  children: React.ReactNode;
}
function ErrorContainier({ error, children }: ErrorContainierInterface) {
  return (
    <Wrapper error={error}>
      {children}
      {/* {error && <ErrorText>{error}</ErrorText>} */}
    </Wrapper>
  );
}
export default ErrorContainier;
