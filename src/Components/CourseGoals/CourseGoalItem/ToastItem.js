import classes from "./ToastItem.module.css";

const ToastItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li
      className={classes["toast-item"]}
      onMouseOver={() => {
        return props.setOnMouse((prev) => !prev);
      }}
    >
      {/* {props.text} */}
      {props.children}
      <button className={classes.btn} onClick={deleteHandler}>
        X
      </button>
    </li>
  );
};

export default ToastItem;
