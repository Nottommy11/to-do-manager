import { useState } from "react";

import Tab from "../Tabs/Tab";
import "./Tabs.css";

import store from "../../store/index";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      {store.tabList.map((tab, index) => {
        return (
          <Tab
            key={index}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
