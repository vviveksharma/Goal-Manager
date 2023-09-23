import React from "react";
import Sidebar from "../sidebar/sidebar";
import myimage from "../../assets/target-icon.png";
import { useEffect } from "react";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    const currentUrl = window.location.pathname
    localStorage.setItem("url", currentUrl)
  },[])
  return (
    <div>
      <Sidebar />
      <h1>About Us</h1>
      <div className="container">
        <div className="text">
          <span>
            The personlized goal management app designed to tackle your goals on
            daily basis. With this go ahead and acheive all your goals.
          </span>
          <ul className="ul">
            Features we provide are:- (Free Trial)
            <li> Persoanlised dashboard</li>
            <li> Goal Tracking and its subtask progress</li>
            <li> Free Trial upto three goals</li>
          </ul>
          <ul className="ul">
            Features we provide are:- (Premium)
            <li> All the feature form the above</li>
            <li> No goal tracking limit</li>
          </ul>
          <Link to={"/premium"}>
            <button type="submit" className="button-about">
              Buy Premium
            </button>
          </Link>
        </div>
        <div className="image">
          <img src={myimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
