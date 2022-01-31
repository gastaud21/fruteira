import "./fruits.css";
import { useState } from "react";

const Fruits = (props) => {
  const { children, image, price } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p>{children}</p>
      <img src={image} alt="fruit"></img>
      <p>R$ {price}</p>
      <p>{count}</p>
      <div className="card-quantity">
        <button
          className="card-quantity-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="card-quantity-button"
          onClick={() => count > 0 && setCount(count - 1)}
        >
          -
        </button>
      </div>
      <button className="card-submit">Adicionar ao carrinho</button>
    </div>
  );
};

export default Fruits;
