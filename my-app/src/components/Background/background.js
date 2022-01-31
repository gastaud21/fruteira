import "./background.css";

const background = (props) => {
  const { children } = props;
  return (
    <div className="main">
      <p className="main-title">FRUTEIRA DO RODRIGO</p>
      <button className="carshop">Carrinho de Compras</button>
      <div className="main-cards">{children}</div>
    </div>
  );
};

export default background;
