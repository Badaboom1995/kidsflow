import React, { useState } from "react";
import TabsView from "./view";

export type TabType = {
  id: number;
  name: string;
  content: any;
};

interface ITabs {
  tabs: TabType[];
  activeId?: number;
}

function Tabs({ tabs, activeId }: ITabs) {
  const [activeTab, setActiveTab] = useState(activeId);
  return (
    <TabsView tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}
export default Tabs;
