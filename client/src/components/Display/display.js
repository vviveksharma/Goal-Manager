import React, { useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import "./display.css";
const Display = () => {
  useEffect(() => {
    const currentUrl = window.location.pathname
    localStorage.setItem("url", currentUrl)
  },[])
  return (
    <div>
      <Sidebar />
      <h1>Dash Board</h1>
    </div>
  );
};

export default Display;
