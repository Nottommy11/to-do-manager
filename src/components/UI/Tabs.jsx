import { useState } from "react";
import { IoAdd } from "react-icons/io5";

import Tab from "../Tabs/Tab";
import "./Tabs.css";

import store from "../../store/index";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabList, setTabList] = useState(store.tabList);

  const addTab = () => {
    setTabList([...tabList, "New Tab"]);
    store.tabList.push("New Tab");
  };

  return (
    <div className="tabs-container">
      {tabList.map((tab, index) => {
        return (
          <Tab
            key={index}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      })}
      <div className="tab-container" onClick={addTab}>
        <IoAdd className="add-tab-icon" />
      </div>
    </div>
  );
};

export default Tabs;
