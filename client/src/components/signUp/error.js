import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
        navigate("/")
    }, 5000);
  }, []);
  return (
    <div>
      <div id="oops">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt={404}
          />
          <span>Error 404</span>
          <p className="p-a">
            Page Not Found! Looks like URL went on vacation without leaving a
            forwarding address. Let's hope it's enjoying some sunny beaches and
            will be back soon!
          </p>
          <p className="p-b"> You will be redirected to Home Page</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
