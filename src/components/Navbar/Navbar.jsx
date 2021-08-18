import React from "react";
import logo from "./../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="" className="flash-logo" />
        <p className="flash-logo-text">goType</p>
      </div>
      <div className="nav-right">
        <a target="_blank" rel="noteferrer" className="nav-link" href="">
          Lik
        </a>
      </div>
    </div>
  );
}
