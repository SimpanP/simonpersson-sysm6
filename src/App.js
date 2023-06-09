import "./App.css";
import "../src/style/Navbar.css";
import "../src/style/Footer.css";
import "../src/style/Home.css";
import "../src/style/Menu.css";
import "../src/style/Cart.css";
import "../src/style/CheckOut.css";
import "../src/style/Summary.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Menu from "./routes/Menu";
import Cart from "./routes/Cart";
import CheckOut from "./routes/CheckOut";
import Summary from "./routes/Summary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
