import React from "react";
import "./signup.css";
import {useState, Redirect} from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password)
    if (email !== "" && password !== "") {
      <Redirect to={"/main"} />
    }
  }
  return (
    <div className="login-card">
      <h1>Login</h1>
      <form className="login-form" onSubmit={HandleSubmit}>
        <div className="username">
          <input
            type="email"
            className="control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <div id="spinner" className="spinner"></div>
        </div>
        <div>
          <input
            placeholder="Password"
            className="control"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="control" type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
