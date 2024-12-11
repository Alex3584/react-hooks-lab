import { Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import MainScreen from "../MainScreen/MainScreen";
import "./MainContent.scss";

import UseStateDemo from "../HooksDemo/UseStateDemo";
import UseEffectDemo from "../HooksDemo/UseEffectDemo";
import UseContextDemo from "../HooksDemo/UseContextDemo";

function MainContent() {
  return (
    <div className="main-container">
      <Sidebar />
      <MainScreen>
        <Routes>
          <Route path="/use-state" element={<UseStateDemo />} />
          <Route path="/use-effect" element={<UseEffectDemo />} />
          <Route path="/use-context" element={<UseContextDemo />} />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default MainContent;
