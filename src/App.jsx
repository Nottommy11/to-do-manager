import { useState } from "react";

import Navbar from "./components/UI/Navbar";
import Tabs from "./components/UI/Tabs";
import Todos from "./components/UI/Todos";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const resetTab = () => {
    setActiveTab(0);
  };

  return (
    <>
      <Navbar resetTab={resetTab} />
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        resetTab={resetTab}
      />
      <Todos activeTabName={activeTab.innerText} />
    </>
  );
};

export default App;
