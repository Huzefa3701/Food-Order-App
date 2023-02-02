import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartToggleContext from '../../store/cart-toggle-context';

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartToggleContext = useContext(CartToggleContext);
  
  const numberOfCartItems = cartContext.items.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <button className={classes.button} onClick={cartToggleContext.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
