import React from "react";

const Square: React.FC<{ value: string; onClick: () => void }> = ({ value, onClick }) => {
  return (
    <button
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        margin: "4px",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;