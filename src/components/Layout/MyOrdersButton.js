import { useContext } from "react";
import MyOrdersContext from "../../store/my-orders-context";
import MyOrdersIcon from "../MyOrders/MyOrdersIcon";

import classes from "./MyOrdersButton.module.css";

const MyOrdersButton = (props) => {
  const ordersContext = useContext(MyOrdersContext);
  return (
    <>
      <button className={classes.button} onClick={ordersContext.onShowOrders}>
        <span className={classes.icon}>
          <MyOrdersIcon />
        </span>
        My Orders
      </button>
    </>
  );
};

export default MyOrdersButton;
