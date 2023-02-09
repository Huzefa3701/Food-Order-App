import React, { useContext, useState } from "react";
import CartToggleContext from "../../store/cart-toggle-context";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { PulseLoader } from "react-spinners";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = `₹${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-order-app-2fea3-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartToggleContext = useContext(CartToggleContext);

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={cartToggleContext.onHideCart}
      >
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  if (isCheckout && !hasItems) {
    setIsCheckout(false);
  }

  let cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && hasItems && <Checkout onConfirm={submitOrderHandler} />}
      {!isCheckout && modalActions}
    </>
  );

  if (isSubmitting)
    cartModalContent = (
      <p style={{ textAlign: "center" }}>
        Sending order data <PulseLoader color="#8a2b06" />
      </p>
    );

  if (didSubmit) {
    cartContext.clearCart();
    cartModalContent = (
      <>
        <p style={{ textAlign: "center" }}>Successfully sent the order! 👍</p>
        <div className={classes.actions}>
          <button
            className={classes.button}
            onClick={cartToggleContext.onHideCart}
          >
            Close
          </button>
        </div>
      </>
    );
  }

  return <Modal>{cartModalContent}</Modal>;
};

export default Cart;
