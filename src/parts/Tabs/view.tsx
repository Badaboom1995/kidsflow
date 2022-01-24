import React from 'react';
import { Wrapper, Tabs, TabContainer, Tab } from './styled';
import { TabType } from './index';

interface ITabsView {
  tabs: TabType[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}
function TabsView({ tabs, activeTab, setActiveTab }: ITabsView) {
  return (
    <Wrapper>
      <Tabs>
        {tabs.map((item, index) => (
          <TabContainer
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            <Tab active={activeTab === index}>{item.name}</Tab>
          </TabContainer>
        ))}
      </Tabs>
      {tabs.map((item, index) => (
        <div
          style={{ display: activeTab === index ? 'block' : 'none' }}
          key={index}
        >
          {item.content}
        </div>
      ))}
    </Wrapper>
  );
}
export default TabsView;
