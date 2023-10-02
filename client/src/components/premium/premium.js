import React, { useState } from "react";
import "./premium.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Premium() {
  const navigate = useNavigate();
  const [prevPage, setPrevPage] = useState("");
  useEffect(() => {
    setPrevPage(localStorage.getItem("url"));
  }, []);

  const handleNavigation = (price) => {
    console.log(price);
    navigate("/payment");
  }
  const handlePrevPage = () => {
    navigate(prevPage);
  };
  return (
    <div className="popup">
      <button className="button-premium" onClick={handlePrevPage}>
        Back
      </button>
      <div className="info">
        <p>
          “Without goals, and plans to reach them, you are like a ship that has
          set sail with no destination.”
        </p>
        <p className="writer">- Fitzhugh Dodson</p>
        <h1>CHOOSE YOUR PRICE</h1>
      </div>
      <section className="pricing-cards">
        <div className="card">
          <h2 className="card-title">Basic</h2>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">19</span>
            <span className="period">/month</span>
          </div>
          <ul className="card-features">
            <li> Upto 10 Goals Tracking</li>
            <li>Expert Guidence specific to goal</li>
            <li>Online Support from Team</li>
          </ul>
          <button className="btn" onClick={() => handleNavigation("This basic clicked")}>Choose Plan</button>
        </div>

        <div className="card featured">
          <h2 className="card-title">Pro</h2>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">29</span>
            <span className="period">/month</span>
          </div>
          <ul className="card-features">
            <li>Upto 25 Goals Tracking</li>
            <li>Expert online Session. (Weekend)</li>
            <li>24/7 Support from Team</li>
          </ul>
          <button className="btn" onClick={() => handleNavigation("This medium clicked")}>Choose Plan</button>
        </div>

        <div className="card" setPrice="Premium">
          <h2 className="card-title">Premium</h2>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">39</span>
            <span className="period">/month</span>
          </div>
          <ul className="card-features">
            <li>Unlimted Goal Tracking</li>
            <li>EveryDay mentorship for goal</li>
            <li>24/7 Support from Team</li>
          </ul>
          <button className="btn" onClick={() => handleNavigation("This premium clicked")}>Choose Plan</button>
        </div>
      </section>
    </div>
  );
}

export default Premium;
