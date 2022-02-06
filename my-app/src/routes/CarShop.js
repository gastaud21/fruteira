import Background from "../components/Background/background";
import CartFruits from "../components/CarFruits/CarFruits";
import { setItem, getItem } from "../helpers/storageHelper";

const CartShop = () => {
  console.log(getItem());
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
          />
        ))}
      </div>
    </Background>
  );
};

export default CartShop;
