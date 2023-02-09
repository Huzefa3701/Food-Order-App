import OrderItem from "./OrderItem";

import classes from "./Orders.module.css";

const Orders = (props) => {
    let totalAmount = 0.00;
    
    console.log(props.orderedItems);
    const ordersList = props.orderedItems.map((item) => {
    const id = item.id;
    const name = item.name;
    const amount = item.amount;
    const price = item.price;
    totalAmount += amount*price;
    return <OrderItem key={id} name={name} amount={amount} price={price} />;
  });

  return (
    <table className={classes["styled-table"]}>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {ordersList}
        <tr>
            <td>Total Amount</td>
            <td></td>
            <td>₹{totalAmount.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;
