import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Tabs = styled.div`
  width: 100%;
  border-bottom: 2px solid #dfe0eb;
  display: flex;
  margin-bottom: 25px;
`;
export const TabContainer = styled.div`
  min-width: 175px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;
type TabProps = {
  active?: boolean;
};
export const Tab = styled.span<TabProps>`
  padding: 10px;
  display: inline-block;
  text-align: left;
  font-size: 16px;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#ff5858" : "transparent")};
  margin-bottom: -2px;
`;
