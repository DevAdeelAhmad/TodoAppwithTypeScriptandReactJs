import React, {useState} from "react";
import "./style.css";

const Counter: React.FC = (props) => {
const [value, setValue] = useState(0);
  return (
    <div className="counter-container">
      <h1>0</h1>
      <button onClick={} style={{background : 'green'}}>INC</button>
      <button style={{background : 'tomato'}}>DEC</button>
    </div>
  );
};

export default Counter;
