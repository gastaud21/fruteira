import Background from "../components/Background/background";
import CartFruits from "../components/CarFruits/CarFruits";
import { getItem, setItem } from "../helpers/storageHelper";

const CartShop = () => {
  const toListCart = getItem();

  const handleClick = (fruit) => {
    const cart = getItem();
    const newCart = cart.filter((item) => item.id !== fruit.id);
    newCart.push(fruit);
    setItem(newCart);
  };

  const removeItem = (fruitName) => {
    const cart = getItem();
    const itemToRemove = cart.filter((item) => item.name === fruitName);
    const newCart = cart.filter((item) => item !== itemToRemove[0]);
    setItem(newCart);
  };

  return (
    <Background>
      <div>
        {toListCart.map((item) => (
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
        <button style={{ cursor: "pointer" }}>FINALIZAR COMPRA</button>
      </div>
    </Background>
  );
};

export default CartShop;
