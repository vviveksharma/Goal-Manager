import React from "react";
import Sidebar from "../sidebar/sidebar";
import myimage from "../../assets/target-icon.png";
import "./about.css";
const About = () => {
  return (
    <div>
      <Sidebar />
      <div className="about">
        <h1>About Us</h1>
      </div>
      <div className="info">
        <span>
          Target Trek is the goal management app designed to managed the goals
          specified in a single period of time. This give interactive UI that
          helps you keep track of your goals over the period of time.
        </span>
        <span>1. Add new Goals as per your requirements</span>
        <span>2. Reiew old goals that already there</span>
        <span>** Special Feature see the Progress through your subtask created **</span>
        <div  className="image-class" >
          <img src={myimage} alt=""/>
        </div>
      </div>
      {/* <div>
        <img src={myimage} alt="" className="image-class" />
      </div> */}
    </div>
  );
};

export default About;
