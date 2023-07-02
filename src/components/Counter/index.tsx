import React, { useState } from "react";
import "./style.css";

const Counter: React.FC = (props) => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  }
  const handleDecrement = () => {
    if(value === 0) return;
    setValue(value - 1);
  }
  return (
    <div className="counter-container">
      <h1>{value}</h1>
      <button onClick={handleIncrement} style={{ background: "green" }}>INC</button>
      <button onClick={handleDecrement} style={{ background: "tomato" }}>DEC</button>
    </div>
  );
};

export default Counter;
