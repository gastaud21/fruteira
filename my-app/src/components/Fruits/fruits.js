import Banana from "./Banana.jpg";
import "./fruits.css";

const Fruits = (props) => {
  const { children } = props;

  return (
    <div className="card">
      <p>{children}</p>
      <img src={Banana} alt="Banana"></img>
      <p>R$</p>
      <p>Unidades ou gramas</p>
      <div className="card-button">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default Fruits;
