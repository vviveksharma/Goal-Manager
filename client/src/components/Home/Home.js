import React from "react";
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
      <span>Manager app designed to checkup on your goals overtime</span>
      <h2>Goal Manager</h2>
      <Link to={"/register"}>
        <button type="submit" className="display">Signup</button>
      </Link>
      
      <Link to={"/login"}>
        <button type="submit" className="display">Login</button>
      </Link>
    </div>
  );
};

export default Home;
