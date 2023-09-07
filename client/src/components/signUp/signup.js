import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form">
        <div className="input">
          <input placeholder="Name"></input>
        </div>
        <div>
          <input placeholder="Email"></input>
        </div>
        <div>
          <input placeholder="Password"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
        <div>
          <p>
            Returning User Login ?{" "}
            <Link to={"/login"}>
              <button type="submit">Login</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
