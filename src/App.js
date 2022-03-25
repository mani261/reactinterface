import "./App.css";
import { Routes, Route } from "react-router-dom";
import Appointment from "./components/Appointment";
import ShopingCart from "./components/shop/ShopingCart";
import Home from "./pages/Home";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";

function App() {
  return (
    <div className="App p-5">
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="shop" element={<ShopingCart />} />
      </Routes>
    </div>
  );
}

export default App;
