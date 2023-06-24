import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import ToastList from "../CourseGoals/CourseGoalList/ToastList";
import classes from "./FirstComponent.module.css"

const Firstcomponent = (props) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [onMouse, setOnMouse] = useState(false);

  //   console.log(list);
  //   console.log('list')

const showtoast = () => {
    if (list.length < 3) {
//    console.log(list.length);
   setCount((prev) => prev + 1);
   let toastProperty = {
     id: count,
     title: "MSG " + count,
   };
//    console.log("show toast fire");
   setList([toastProperty, ...list]);
 }
//   setCount((prev) => prev + 1);
//   let toastProperty = {
//     id: count,
//     title: "MSG " + count,
//   };
//   console.log("show toast fire");
//   setList([toastProperty , ...list]);
};

  const deleteItemHandler = (goalId) => {
    setList((prev) => {
      const updatedGoals = prev.filter((goals) => goals.id !== goalId);
      return updatedGoals;
    });
  };

  useEffect(() => {
    // console.log(onMouse);
    const interval = setInterval(() => {
      if (list.length) {
        deleteItemHandler(list[list.length - 1].id);
      }
    }, 7000);

    return () => {
        clearInterval(interval);
        // console.log('clear interval')
    };
  }, [onMouse, list]);

  return (
    <div className={classes.container} >
      <div><Button handleClick={showtoast}>Show Toast</Button></div>
      <ToastList
        onDeleteItem={deleteItemHandler}
        items={list}
        setOnMouse={setOnMouse}
      />
    </div>
  );
};

export default Firstcomponent;
