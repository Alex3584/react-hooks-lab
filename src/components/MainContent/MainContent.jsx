import { Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import MainScreen from "../MainScreen/MainScreen";
import "./MainContent.scss";

import UseStateDemo from "../HooksDemo/UseStateDemo";
import UseEffectDemo from "../HooksDemo/UseEffectDemo";

function MainContent() {
  return (
    <div className="main-container">
      <Sidebar />
      <MainScreen>
        <Routes>
          <Route path="/use-state" element={<UseStateDemo />} />
          <Route path="/use-effect" element={<UseEffectDemo />} />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default MainContent;
