import React, { useState } from "react";

const MyOrdersContext = React.createContext({
  ordersIsShown: false,
  onShowOrders: () => {},
  onHideOrders: () => {},
});

export const MyOrdersContextProvider = (props) => {
  const [showOrders, setShowOrders] = useState(false);

  const showOrdersHandler = () => {
    setShowOrders(true);
  };

  const hideOrdersHandler = () => {
    setShowOrders(false);
  };

  const ordersContext = {
    ordersIsShown: showOrders,
    onShowOrders: showOrdersHandler,
    onHideOrders: hideOrdersHandler,
  };

  return (
    <MyOrdersContext.Provider value={ordersContext}>
      {props.children}
    </MyOrdersContext.Provider>
  );
};

export default MyOrdersContext;
