/* eslint-disable react/prop-types */
import { useState } from "react";

import "./addTab.css";

const AddTab = (props) => {
  const [tabName, setTabName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tabName !== "") {
      if (props.tabList.includes(tabName)) {
        alert("Tab already exists");
      } else {
        props.addTab(tabName);
        setTabName("");
        props.setShowModal(false);
      }
    }
  };

  return (
    <>
      <div className="tab-modal-bg" onClick={() => props.setShowModal(false)} />
      <div className="tab-modal-container">
        <form className="tab-modal" onSubmit={handleSubmit}>
          <div className="tab-modal-title">Add Tab</div>
          <input
            className="tab-modal-input"
            type="text"
            required
            placeholder="Tab Name"
            value={tabName}
            onChange={(e) => setTabName(e.target.value)}
          />
          <button className="tab-modal-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTab;
