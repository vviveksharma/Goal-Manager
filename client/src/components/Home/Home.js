import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import displayImage from "../../assets/about.webp";
const Home = () => {
  return (
    <div className="display-container">
      <div className="display">
        <span className="span">
          Meet your target and complete your task easily on time with{" "}
          <span className="logo">TargetTrek</span>
        </span>
      </div>
      <div className="flex-container">
        <div className="text">
          As the name suggest <b>TargetTrek</b> a perfect application for
          tracking on target and completing them on time so that you and your
          work life always exceeds your expectations.
          <div>
            <br />
            Enjoy the app to the fullest join Premium.
          </div>
          <Link to={"/register"}>
            <button type="submit" className="home-button">
              Signup
            </button>
          </Link>
          <Link to={"/login"}>
            <button type="submit" className="home-button">
              Login
            </button>
          </Link>
        </div>
        <div className="image">
          <img src={displayImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
