import Background from "../components/Background/background";
import CartFruits from "../components/CarFruits/CarFruits";
import { getItem } from "../helpers/storageHelper";

const CartShop = () => {
  const toListCart = getItem();
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
          />
        ))}
        <button style={{ cursor: "pointer" }}>FINALIZAR COMPRA</button>
      </div>
    </Background>
  );
};

export default CartShop;
