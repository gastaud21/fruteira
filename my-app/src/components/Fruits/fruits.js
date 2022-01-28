import Banana from "./Banana.jpg";
import "./fruits.css";

const Fruits = (props) => {
  const { children } = props;

  return (
    <div>
      <p>{children}</p>
      <img src={Banana} alt="Banana"></img>
      <p>R$</p>
      <p>Unidades ou gramas</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Fruits;
