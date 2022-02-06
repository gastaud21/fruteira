import "./CarFruits.css";

const CartFruits = (props) => {
  const { image, name, quantity, price, totalPrice, unity } = props;
  return (
    <div className="cardItem">
      <img className="cardItem-image" src={image} alt={name}></img>
      <p className="cardItem-name">{name}</p>
      <p className="cardItem-quantity">
        Quantidade:
        <br />
        {quantity}
      </p>
      <p className="cardItem-price">
        Preço:
        <br />
        R$ {price}/{unity === "unidade" ? "unidade(s)" : unity}
      </p>
      <p className="cardItem-totalPrice">
        Subtotal:
        <br />
        R$ {totalPrice}
      </p>
    </div>
  );
};

export default CartFruits;
