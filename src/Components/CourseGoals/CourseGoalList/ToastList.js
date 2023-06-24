import ToastItem from "../CourseGoalItem/ToastItem";
import classes from "./ToastList.module.css";

const ToastList = (props) => {
  // console.log(props.items)
  return (
    <ul className={classes["goal-list"]}>
      {props.items.map((goal) => (
        <ToastItem
          
          setOnMouse={props.setOnMouse}
          key={goal.id}
          //   text={goal.text}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.title}
        </ToastItem>
      ))}
    </ul>
  );
};

export default ToastList;
