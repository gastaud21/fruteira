import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Fruits from "./components/fruits";
import Home from "./routes/PageProducts";
import CarShop from "./routes/CarShop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CarShop" element={<CarShop />} />
      </Routes>

      {/* <Fruits>banana</Fruits> */}
    </>
  );
}

export default App;
