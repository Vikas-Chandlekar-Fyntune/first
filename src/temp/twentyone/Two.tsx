import React from "react";

const Two = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px", // 👈 controls space between div1 & div2
        border: "2px solid #ccc",
        padding: "10px",
      }}
    >
      {/* Div 1 */}
      <div
        style={{
          background: "#cfe2ff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        Div 1 (content)
      </div>

      {/* Div 2 */}
      <div
        style={{
          background: "#ff8c42",
          color: "white",
          textAlign: "center",
          padding: "12px",
          borderRadius: "6px",
          width: "100%",
        }}
      >
        Div 2 (ribbon)
      </div>
    </div>
  );
};

export default Two;
