import { GlassCard, GridContainer } from "parts/styled";

import styled from "styled-components";

export const Wrapper = styled(GridContainer)`
  width: 50%;
  padding: 35px 0;
`;
export const Row = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Left = styled(GlassCard)`
  padding: 35px 0;
  grid-column: span 6;
`;
export const Right = styled.div`
  grid-column: span 4;
  padding: 0 20px;
`;
