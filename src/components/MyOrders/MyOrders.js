import { useContext, useEffect, useState } from "react";
import Accordian from "../UI/Accordian";
import MyOrdersModal from "../UI/MyOrdersModal";
import { BeatLoader } from "react-spinners";
import MyOrdersContext from "../../store/my-orders-context";

import classes from './MyOrders.module.css'

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noOrder, setNoOrder] = useState(false);

  const ordersContext = useContext(MyOrdersContext);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://food-order-app-2fea3-default-rtdb.firebaseio.com/orders.json"
        );
        const data = await response.json();
        let loadedOrders = [];
        for (let key in data) {
          const orderData = {
            id: key,
            user: data[key].user.name,
            orderedItems: data[key].orderedItems,
          };
          loadedOrders.push(orderData);
        }
        if(loadedOrders.length === 0)
          setNoOrder(true);
        else
          setMyOrders(loadedOrders);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchOrders();
  }, []);

  let myOrdersModalContent = "";

  if (isLoading) {
    myOrdersModalContent = (
      <BeatLoader
        style={{ display: "flex", justifyContent: "center" }}
        color="#8a2b06"
      />
    );
  } else if (isError) {
    myOrdersModalContent = (
      <p style={{ textAlign: "center" }}>Something Went Wrong! 😵</p>
    );
  } else if(noOrder) {
    myOrdersModalContent = <p style={{ textAlign: "center" }}>Sorry! No Orders Found 👎</p>
  }
  else
    myOrdersModalContent = <Accordian myOrders={myOrders} />;

  return (
    <MyOrdersModal>
      {myOrdersModalContent}
      <div className={classes.actions}>
        <button type="button" onClick={ordersContext.onHideOrders}>
          Close
        </button>
      </div>
    </MyOrdersModal>
  );
};

export default MyOrders;
