import React from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [response, setResponse] = useState(null);
  const [Token, setToken] = useState({
    Token: "",
  });

  async function verify(token) {
    console.log("The token from the request = ", token);
    setToken({
      Token: token,
    });
    const check = await axios.post(
      "http://localhost:8000/auth/verify-token",
      Token
    );
    if (check) {
      return true;
    }
    return false;
  }

  const handlePrevPage = () => {
    navigate("/");
  }
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/auth/login", data);
    console.log(response.data);
    setResponse(response.data);
    if (verify(response.data.token)) {
      localStorage.setItem("username", response.data.user.username);
      navigate("/main");
    }
  };
  return (
    <div>
      <button className="button-premium" onClick={handlePrevPage}>
        Back
      </button>
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
    </div>
  );
};

export default Login;
