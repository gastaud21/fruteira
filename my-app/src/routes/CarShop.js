import Background from "../components/Background/background";
import CartFruits from "../components/CarFruits/CarFruits";
import { getItem, setItem, sortByID } from "../helpers/storageHelper";
import { useState, useEffect } from "react";

const CartShop = () => {
  const toListCart = getItem();
  const [listWindow, setListWindow] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    setListWindow(toListCart);
    const cart = getItem();
    let total = 0;
    cart.forEach((item) => {
      total = total + item.totalItem;
    });
    setTotalCart(total);
  }, [update]);

  const handleClick = (fruit) => {
    const cart = getItem();
    const newCart = cart.filter((item) => item.id !== fruit.id);
    newCart.push(fruit);
    setUpdate(newCart);
    sortByID(newCart);
    setItem(newCart);
  };

  const removeItem = (fruitName) => {
    const cart = getItem();
    const itemToRemove = cart.filter((item) => item.name === fruitName);
    const newCart = cart.filter((item) => item !== itemToRemove[0]);
    setUpdate(newCart);
    setItem(newCart);
  };

  return (
    <Background>
      <div>
        {listWindow.map((item) => (
          <CartFruits
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.totalItem}
            image={item.image}
            key={item.id}
            unity={item.unity}
            id={item.id}
            cliking={handleClick}
            clikingToRemove={removeItem}
          />
        ))}
        <div style={{ display: "flex" }}>
          <button
            style={{
              cursor: "pointer",
              width: "200px",
              height: "40px",
              margin: "30px",
              borderRadius: "10px",
            }}
          >
            <b>FINALIZAR COMPRA</b>
          </button>
          <p
            style={{
              border: "1px dashed black",
              padding: "10px",
            }}
          >
            Total : <b>R$ {totalCart}</b>
          </p>
        </div>
      </div>
    </Background>
  );
};

export default CartShop;
