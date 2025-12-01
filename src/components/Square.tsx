import React from "react";

const Square: React.FC<{ disabled: boolean, value: string; onClick: () => void }> = ({ disabled, value, onClick }) => {
  return (
    <button
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        margin: "4px",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;