import React from "react";
import "./Navbar.css"; // Import the CSS for this component


function Navbar() {
  return (
    <div className="navbar">
      <i className="icon1">
        <a href="/home">
          <img
            src="home.png"
            alt="logo"
            style={{ width: "25px", height: "25px" }}
          />
        </a>
      </i>
      <i className="icon2"></i>
      <a href="/instagram">
        <img
          src="search.png"
          alt="logo"
          style={{ width: "25px", height: "25px" }}
        />
      </a>
      <i className="icon3"></i>
      <a href="/generate">
        <img
          src="add.png"
          alt="logo"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
      <i className="icon4"></i>
      <a href="/upload">
      <img
          src="upload.png"
          alt="logo"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
      <a href="/profile">
        <img
          src="user.png"
          alt="logo"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
    </div>
  );
}

export default Navbar;
