import React from "react";      

const Board: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px",
        marginTop: "16px",
      }}
    >
      {children}
    </div>
  );
};

export default Board;