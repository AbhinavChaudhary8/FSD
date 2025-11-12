// src/components/Footer.js
import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    bottom: "0",
    width: "100%"
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 My React App | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
