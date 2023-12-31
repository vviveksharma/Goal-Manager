import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Signup } from "./components/signUp/signup";
import About from "./components/pages/about";
import Login from "./components/signUp/login";
import Display from "./components/Display/display";
import Error from "./components/signUp/error";
import Contact from "./components/pages/contact";
import Premium from "./components/premium/premium";
import Profile from "./components/pages/profile";
import Editprofile from "./components/pages/edit-profile";
import Payment from "./components/premium/payment";
import Goals from "./components/pages/goals";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="dark-mode"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Display />} />
          <Route path="/*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<Editprofile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
