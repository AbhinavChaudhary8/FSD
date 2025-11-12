// src/components/Navbar.js
import React from "react";

const Header = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#282c34",
    color: "white"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const logoStyle = {
    height: "40px"
  };

  return (
    <nav style={navbarStyle}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="logo"
        style={logoStyle}
      />
      <div style={navLinksStyle}>
        <a style={linkStyle} href="#home">Home</a>
        <a style={linkStyle} href="#about">About</a>
        <a style={linkStyle} href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
