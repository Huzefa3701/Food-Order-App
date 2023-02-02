import React, { useState } from "react";

const CartToggleContext = React.createContext({
    cartIsShown: false,
    onShowCart: () => {},
    onHideCart: () => {},
});

export const CartToggleContextProvider = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);
  
    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  
    return (
      <CartToggleContext.Provider
        value={{
          cartIsShown: cartIsShown,
          onShowCart: showCartHandler,
          onHideCart: hideCartHandler,
        }}
      >
        {props.children}
      </CartToggleContext.Provider>
    );
  };
  
  export default CartToggleContext;