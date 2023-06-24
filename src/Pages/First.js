import { useEffect, useState } from "react";
import classes from "./First.module.css";
import ToastList from "../Components/CourseGoals/CourseGoalList/ToastList";
import ToastInput from "../Components/CourseGoals/CourseInput/ToastInput";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/Footer";

function First() {
  const [mouseOver, setMouseOver] = useState(false);

  const [goals, setGoals] = useState([
    { title: "Error!!", id: "g1" },
    { title: " Success !!!", id: "g2" },
  ]);

  console.log(goals);

  const addGoalHandler = (enteredText) => {
    // console.log(enteredText)
    if (goals.length < 3) {
      setGoals((prev) => {
        const updateGoals = [...prev];
        updateGoals.unshift({
          title: enteredText,
          id: Math.random().toString(),
        });
        return updateGoals;
      });
    }
  };

  const deleteItemHandler = (goalId) => {
    setGoals((prev) => {
      const updatedGoals = prev.filter((goals) => goals.id !== goalId);
      return updatedGoals;
    });
  };

  useEffect(() => {
    // console.log(onMouse);
    const interval = setInterval(() => {
      if (goals.length) {
        deleteItemHandler(goals[goals.length - 1].id);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
      // console.log('clear interval')
    };
  }, [mouseOver, goals]);

  // let content = (
  //   <p style={{ textAlign: "center" }}>no goals found. Maybe add one?</p>
  // );

  // if (goals.length > 0) {
  //   content = <GoalList items={goals} onDeleteItem={deleteItemHandler} />;
  // }
  //   console.log(formIsValid);
  
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes["sec-container"]}>
        <section id={classes["goal-form"]}>
          <ToastInput onAddGoal={addGoalHandler} />
        </section>
        <section id={classes.goals}>
          <ToastList
            items={goals}
            onDeleteItem={deleteItemHandler}
            setOnMouse={setMouseOver}
          />
          {/* {content} */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default First;
