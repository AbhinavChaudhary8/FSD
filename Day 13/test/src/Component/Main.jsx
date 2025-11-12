// src/components/Main.jsx
import React, { useState } from "react";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mainStyle = {
    padding: "30px",
    textAlign: "center",
  };

  const searchStyle = {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  };

  const cardStyle = {
    width: "200px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
  };

  // Static cards (no imports)
  const cards = [
    {
      id: 1,
      title: "Card One",
      description: "This is the first card's description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card Two",
      description: "This is the second card's description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card Three",
      description: "This is the third card's description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Card Four",
      description: "This is the fourth card's description.",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Filter based on search term
  const filteredCards = cards.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main style={mainStyle}>
      <h2>Search Cards</h2>
      <input
        type="text"
        placeholder="Search..."
        style={searchStyle}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={cardContainerStyle}>
        {filteredCards.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
