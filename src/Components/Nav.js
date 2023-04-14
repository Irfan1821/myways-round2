import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>Food App</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/food-list">FoodLilst</Link>
      </div>
    </div>
  );
};

export default Nav;
