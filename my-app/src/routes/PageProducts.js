import Fruits from "../components/Fruits/fruits";
import Background from "../components/Background/background";
import Banana from "../components/Fruits/Banana.jpg";
import Maça from "../components/Fruits/Maça.jpg";
import Laranja from "../components/Fruits/Laranja.jpg";
import Abacate from "../components/Fruits/Abacate.jpg";
import Manga from "../components/Fruits/Manga.jpg";
import { getItem, setItem } from "../helpers/storageHelper";

const Home = () => {
  const fruitList = [
    { id: 1, name: "Banana", unity: "kg", price: 6.0, image: Banana },
    { id: 2, name: "Maça", unity: "kg", price: 3.0, image: Maça },
    { id: 3, name: "Laranja", unity: "kg", price: 5.5, image: Laranja },
    { id: 4, name: "Abacate", unity: "unidade", price: 5.0, image: Abacate },
    { id: 5, name: "Manga", unity: "unidade", price: 6.0, image: Manga },
  ];

  const handleClick = (fruit) => {
    const cart = getItem();
    const newCart = cart.filter((item) => item.id !== fruit.id);
    newCart.push(fruit);
    setItem(newCart);
  };

  return (
    <Background>
      {fruitList.map((fruit) => (
        <Fruits
          price={fruit.price}
          unity={fruit.unity}
          image={fruit.image}
          cliking={handleClick}
          id={fruit.id}
          key={fruit.id}
        >
          {fruit.name}
        </Fruits>
      ))}
    </Background>
  );
};

export default Home;
