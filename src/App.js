import React, { useContext } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartToggleContext from "./store/cart-toggle-context";
import CartProvider from "./store/CartProvider";

function App() {
  const cartToggleContext = useContext(CartToggleContext);

  return (
    <CartProvider>
      {cartToggleContext.cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
