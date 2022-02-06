import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/PageProducts";
import CartShop from "./routes/CarShop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CartShop" element={<CartShop />} />
      </Routes>
    </>
  );
}

export default App;
