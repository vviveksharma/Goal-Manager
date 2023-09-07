import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/signUp/signup";
import Login from "./components/signUp/login";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
