import React, { useContext } from "react";
import ReactDOM from "react-dom";
import MyOrdersContext from "../../store/my-orders-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHideMyOrders}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div style={{maxHeight: '90vh', width: '100%', overflowY: 'scroll'}}>
        <div className={classes.content} style={{paddingRight: '10px'}}>{props.children}</div>
      </div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const MyOrdersModal = (props) => {
  const ordersContext = useContext(MyOrdersContext);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideMyOrders={ordersContext.onHideOrders} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default MyOrdersModal;
