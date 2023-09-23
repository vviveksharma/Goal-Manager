import React from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [response, setResponse] = useState(null);

  const verify = async(e, token) => {
    e.preventDefault();
    const verify = await axios.post("http://localhost:8000/auth/verify-token", token);
    if (verify.status === 200) {
      return true
    } else {
      return false;
    }
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/auth/login", data);
    console.log(response.data);
    setResponse(response.data);
    if (verify) {
      navigate("/main");
    }
  };
  return (
    <div className="register">
      <div className="login-card">
        <h1 className="login-h1">Login</h1>
        <form className="login-form" onSubmit={HandleSubmit}>
          <div className="username">
            <input
              type="email"
              className="control"
              name="email"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Email"
            ></input>
            <div id="spinner" className="spinner"></div>
          </div>
          <div>
            <input
              placeholder="Password"
              className="control"
              name="password"
              type="password"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            ></input>
          </div>
          <div>
            <button className="control" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
