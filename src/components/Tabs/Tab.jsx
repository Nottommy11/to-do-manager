/* eslint-disable react/prop-types */
import { useRef } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";

const Tab = (props) => {
  const tabRef = useRef(null);

  const handleClick = () => {
    props.setActiveTab(tabRef.current);
  };

  return (
    <div
      className={
        props.activeTab === tabRef.current
          ? "tab-container active"
          : "tab-container"
      }
      onClick={handleClick}
      ref={tabRef}
    >
      <div className="tab-title">{props.tab}</div>
      <AiOutlineDown className="tab-settings-icon" />
      <AiOutlineClose
        className="tab-close-icon"
        onClick={() => props.deleteTab(props.tab)}
      />
    </div>
  );
};

export default Tab;
