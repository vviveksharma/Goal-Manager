import { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const strengthLabels = ["weak", "medium", "strong"];

export const Signup = () => {
  let navigate = useNavigate();
  const [strength, setStrength] = useState("");
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  const getStrength = (password) => {
    console.log(password);

    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handlePrevPage = () => {
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/auth/register",
      data
    );
    console.log(response.data);
    setResponse(response.data);
    if (response.status === 200) {
      navigate("/login");
    }
  };
  const handleChange = (event) => {
    getStrength(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <button className="button-premium" onClick={handlePrevPage}>
        Back
      </button>
      <div className="register">
        <div className="login-card">
          <h2>Sign Up</h2>
          <form className="login-form" onSubmit={handleRegister}>
            <input
              name="username"
              spellCheck="false"
              className="control"
              type="text"
              placeholder="UserName"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <div className="username">
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
              <div id="spinner" className="spinner"></div>
            </div>
            <input
              name="password"
              spellCheck="false"
              className="control"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <div className={`bars ${strength}`}>
              <div></div>
            </div>
            <div className="strength">
              {strength && <>{strength} password</>}
            </div>
            <button className="control" type="submit">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
