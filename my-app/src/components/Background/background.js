import "./background.css";
import { Link } from "react-router-dom";

const background = (props) => {
  const { children } = props;
  return (
    <div className="main">
      <p className="main-title">FRUTEIRA DO RODRIGO</p>
      <div className="main-buttons">
        <Link to="/">
          <button className="main-buttons-routes">Home</button>
        </Link>
        <Link to="CartShop">
          <button className="main-buttons-routes">Carrinho de Compras</button>
        </Link>
      </div>
      <div className="main-cards">{children}</div>
    </div>
  );
};

export default background;
