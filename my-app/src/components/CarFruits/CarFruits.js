import "./CarFruits.css";
import { useState } from "react";

const CartFruits = (props) => {
  const {
    image,
    name,
    quantity,
    price,
    totalPrice,
    unity,
    id,
    cliking,
    clikingToRemove,
  } = props;
  const [count, setCount] = useState(quantity);
  console.log(count);

  return (
    <div className="cardItem">
      <img className="cardItem-image" src={image} alt={name}></img>
      <p className="cardItem-name">{name}</p>
      <p className="cardItem-quantity">
        Quantidade:
        <br />
        {count}
      </p>
      <p className="cardItem-price">
        Preço:
        <br />
        R$ {price}/{unity === "unidade" ? "unidade(s)" : unity}
      </p>
      <p className="cardItem-totalPrice">
        Subtotal:
        <br />
        R$ {totalPrice + (count - quantity) * price}
      </p>
      <div className="cardItem-changeQuantity">
        <p className="cardItem-changeQuantity-title">
          Mudar a quantidade
          <br />
          de itens no carrinho?
        </p>
        <div>
          <button
            className="cardItem-changeQuantity-buttons"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="cardItem-changeQuantity-buttons"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
        <button
          className="cardItem-changeQuantity-AddToCart"
          onClick={() =>
            cliking({
              id,
              name,
              image,
              unity,
              price,
              quantity: count,
              totalItem: count * price,
            })
          }
        >
          Adicionar ao
          <br />
          carrinho
        </button>
      </div>
      <button
        className="cardItem-removeItem"
        onClick={() => clikingToRemove(name)}
      >
        Remover Item
        <br />
        do carrinho
      </button>
    </div>
  );
};

export default CartFruits;
