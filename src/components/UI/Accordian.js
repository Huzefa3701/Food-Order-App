import { useState } from "react";
import classes from "./Accordian.module.css";
import AccordianItem from "./AccordianItem";

const Accordian = (props) => {
  const [isActiveId, setActiveId] = useState("");

  const changeHandler = (id) => {
    setActiveId(id);
  };

  const users = props.myOrders.map((orderData) => {
    const orderId = orderData.id;
    const orderUser = orderData.user;
    const orderedItems = orderData.orderedItems;

    return (
      <AccordianItem
        acClick={changeHandler}
        activePanel={isActiveId}
        key={orderId}
        orderId={orderId}
        user={orderUser}
        orderedItems={orderedItems}
      />
    );
  });

  return <ul className={classes.accordian}>{users}</ul>;
};

export default Accordian;
