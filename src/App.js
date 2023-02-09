import React, { useContext } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MyOrders from "./components/MyOrders/MyOrders";
import Meals from "./components/Meals/Meals";
import CartToggleContext from "./store/cart-toggle-context";
import CartProvider from "./store/CartProvider";
import MyOrdersContext from "./store/my-orders-context";

function App() {
  const cartToggleContext = useContext(CartToggleContext);
  const ordersContext = useContext(MyOrdersContext);

  return (
    <CartProvider>
      {cartToggleContext.cartIsShown && <Cart />}
      {ordersContext.ordersIsShown && <MyOrders />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
