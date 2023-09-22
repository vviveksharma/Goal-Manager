import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./display.css";
const Display = () => {
  return (
    <div>
      <Sidebar />
      <div className="display"> Welcome to TargetTrek</div>
      <span>Sure short way to track your goals</span>
    </div>
  );
};

export default Display;
