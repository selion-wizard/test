import React from "react";

function Card({ image, title, description, price }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        margin: "20px auto",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <h3 style={{ margin: "12px 0 8px 0" }}>{title}</h3>
      <p style={{ color: "#666", margin: "8px 0" }}>{description}</p>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "8px 0",
        }}
      >
        {price}
      </p>
      <button
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Купить
      </button>
    </div>
  );
}

export default Card;
