import { Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import MainScreen from "../MainScreen/MainScreen";
import "./MainContent.scss";

import UseStateDemo from "../HooksDemo/UseStateDemo";
import UseEffectDemo from "../HooksDemo/UseEffectDemo";
import UseContextDemo from "../HooksDemo/UseContextDemo";
import UseReducerDemo from "../HooksDemo/UseReducerDemo";
import UseMemoDemo from "../HooksDemo/UseMemoDemo";
import UseCallbackDemo from "../HooksDemo/UseCallbackDemo";
import UseRefDemo from "../HooksDemo/UseRefDemo";
import UseLayoutEffectDemo from "../HooksDemo/UseLayoutEffectDemo";

function MainContent() {
  return (
    <div className="main-container">
      <Sidebar />
      <MainScreen>
        <Routes>
          <Route path="/use-state" element={<UseStateDemo />} />
          <Route path="/use-effect" element={<UseEffectDemo />} />
          <Route path="/use-context" element={<UseContextDemo />} />
          <Route path="/use-reducer" element={<UseReducerDemo />} />
          <Route path="/use-memo" element={<UseMemoDemo />} />
          <Route path="/use-callback" element={<UseCallbackDemo />} />
          <Route path="/use-ref" element={<UseRefDemo />} />
          <Route path="/use-layout-effect" element={<UseLayoutEffectDemo />} />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default MainContent;
