import React from "react";
import { Wrapper, Tabs, TabContainer, Tab } from "./styled";
import { TabType } from "./index";

interface ITabsView {
  tabs: TabType[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}
function TabsView({ tabs, activeTab, setActiveTab }: ITabsView) {
  return (
    <Wrapper>
      <Tabs>
        {tabs.map((item) => (
          <TabContainer
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
            }}
          >
            <Tab active={activeTab === item.id}>{item.name}</Tab>
          </TabContainer>
        ))}
      </Tabs>
      {/* {tabs.find((item) => item.id === activeTab)?.content} */}
      {tabs.map((item) => (
        <div
          style={{ display: activeTab === item.id ? "block" : "none" }}
          key={item.id}
        >
          {item.content}
        </div>
      ))}
    </Wrapper>
  );
}
export default TabsView;
