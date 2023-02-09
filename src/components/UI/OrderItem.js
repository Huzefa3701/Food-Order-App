const OrderItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>₹{props.price}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default OrderItem;
