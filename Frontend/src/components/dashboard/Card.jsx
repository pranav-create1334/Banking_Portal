import React from "react";

const Card = ({ title, value, subtitle }) => {
  return (
    <div style={cardStyle}>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};