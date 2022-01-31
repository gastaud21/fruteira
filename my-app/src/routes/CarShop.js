import Fruits from "../components/Fruits/fruits";
import Background from "../components/Background/background";
import Banana from "../components/Fruits/Banana.jpg";
import Maça from "../components/Fruits/Maça.jpg";
import Laranja from "../components/Fruits/Laranja.jpg";
import Abacate from "../components/Fruits/Abacate.jpg";
import Manga from "../components/Fruits/Manga.jpg";

const Home = () => {
  const fruitList = [
    { name: "Banana", unity: "kg", price: 6.0, image: Banana },
    { name: "Maça", unity: "kg", price: 3.0, image: Maça },
    { name: "Laranja", unity: "kg", price: 5.5, image: Laranja },
    { name: "Abacate", unity: "unidade(s)", price: 5.0, image: Abacate },
    { name: "Manga", unity: "unidade(s)", price: 6.0, image: Manga },
  ];

  return (
    <Background>
      {fruitList.map((fruit) => (
        <Fruits price={fruit.price} unity={fruit.unity} image={fruit.image}>
          {fruit.name}
        </Fruits>
      ))}
      {/* <Fruits image={Banana}>Banana</Fruits> */}
    </Background>
  );
};

export default Home;
