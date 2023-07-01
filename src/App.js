import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Third from "./Pages/Third"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/second" element={<First />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import { useState } from "react";
// import classes from  "./App.module.css";
// import ToastList from "./Components/CourseGoals/CourseGoalList/ToastList";
// import ToastInput from "./Components/CourseGoals/CourseInput/ToastInput";
// // import Firstcomponent from "./Components/firstComponent/Firstcomponent";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/footer/Footer";

// function App() {
//   const [goals, setGoals] = useState([
//     { text: "Error!!", id: "g1" },
//     { text: " Success !!!", id: "g2" },
//   ]);

//   const addGoalHandler = (enteredText) => {
//     setGoals((prev) => {
//       const updateGoals = [...prev];
//       updateGoals.unshift({
//         text: enteredText,
//         id: Math.random().toString(),
//       });
//       return updateGoals;
//     });
//   };

//   const deleteItemHandler = (goalId) => {
//     setGoals((prev) => {
//       const updatedGoals = prev.filter((goals) => goals.id !== goalId);
//       return updatedGoals;
//     });
//   };

//   // let content = (
//   //   <p style={{ textAlign: "center" }}>no goals found. Maybe add one?</p>
//   // );

//   // if (goals.length > 0) {
//   //   content = <GoalList items={goals} onDeleteItem={deleteItemHandler} />;
//   // }

//   return (
//     <div className={classes.container}>
//       <Navbar/>
//       {/* <Firstcomponent /> */}
//       <section id={classes["goal-form"]}>
//         <ToastInput onAddGoal={addGoalHandler} />
//        </section>
//       <section id={classes.goals}>
//         <ToastList items={goals} onDeleteItem={deleteItemHandler} />
//         {/* {content} */}
//       </section>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
