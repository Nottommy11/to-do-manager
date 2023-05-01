/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

import Tab from "../Tabs/Tab";
import AddTab from "./AddTab";

import "./Tabs.css";

import store from "../../store/index";

const Tabs = (props) => {
  const [tabList, setTabList] = useState(store.tabList);
  const [showModal, setShowModal] = useState(false);

  const addTab = (tabName) => {
    setTabList([...tabList, tabName]);

    store.tabList.push(tabName);
  };

  const deleteTab = (tab) => {
    setTabList(tabList.filter((tabItem) => tabItem !== tab));

    store.tabList = tabList.filter((tabItem) => tabItem !== tab);

    props.resetTab;
  };

  return (
    <>
      <div className="tabs-container">
        {tabList.map((tab, index) => {
          return (
            <Tab
              key={index}
              tab={tab}
              activeTab={props.activeTab}
              setActiveTab={props.setActiveTab}
              deleteTab={deleteTab}
            />
          );
        })}
        <div className="tab-container" onClick={setShowModal}>
          <IoAdd className="add-tab-icon" />
        </div>
      </div>
      {showModal && (
        <AddTab tabList={tabList} addTab={addTab} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Tabs;
