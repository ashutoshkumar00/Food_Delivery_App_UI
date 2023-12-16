import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showCart, setShowCart] = useState(false);

  let navigate = useNavigate();

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleHidingCart = () => {
    setShowCart(false);
    navigate("/");
  };

  return (
    <CartProvider>
      {showCart && <Cart onHidingCart={handleHidingCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default Home;
