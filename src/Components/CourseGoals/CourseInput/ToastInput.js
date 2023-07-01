import { useState } from "react";
import Button from "../../UI/Button";
import classes from "./ToastInput.module.css";

const ToastInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const InputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredValue)
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  // console.log(formIsValid)
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["form-control"]}>
        <input type="text" value={enteredValue} onChange={InputChangeHandler} required />
        <Button className={classes.btn}   type="submit" >Sumbit</Button>
      </div>
    </form>
  );
};  
export default ToastInput;
