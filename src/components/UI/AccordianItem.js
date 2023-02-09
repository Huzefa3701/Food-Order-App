import classes from "./AccordianItem.module.css";
import Orders from "./Orders";

const AccordianItem = (props) => {
  const toggleAccordianHandler = () => {
    if (props.orderId === props.activePanel) 
      props.acClick("");
    else 
      props.acClick(props.orderId);
  };

  return (
    <li className={classes["accordian-item"]}>
      <button className={classes["button-78"]} onClick={toggleAccordianHandler}>
        Orders placed by {props.user}
      </button>
      {props.orderId === props.activePanel && (
        <div className={classes.panel}>
          <Orders orderedItems={props.orderedItems} />
        </div>
      )}
    </li>
  );
};

export default AccordianItem;
