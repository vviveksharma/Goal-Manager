import React from "react";
import {useState} from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password)
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={HandleSubmit}>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
