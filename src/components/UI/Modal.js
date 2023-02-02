import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartToggleContext from "../../store/cart-toggle-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  const cartToggleContext = useContext(CartToggleContext);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={cartToggleContext.onHideCart} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;
