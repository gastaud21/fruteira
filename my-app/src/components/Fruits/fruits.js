import Banana from "./Banana.jpg";
import "./fruits.css";
import { useState } from "react";

const Fruits = (props) => {
  const { children } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p>{children}</p>
      <img src={Banana} alt="Banana"></img>
      <p>R$</p>
      <p>{count}</p>
      <div className="card-button">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Fruits;
