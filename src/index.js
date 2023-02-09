import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { CartToggleContextProvider } from "./store/cart-toggle-context";
import { MyOrdersContextProvider } from "./store/my-orders-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartToggleContextProvider>
    <MyOrdersContextProvider>
      <App />;
    </MyOrdersContextProvider>
  </CartToggleContextProvider>
);
