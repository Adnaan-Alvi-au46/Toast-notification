import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Firstcomponent from "../Components/firstComponent/Firstcomponent";
import Footer from "../Components/footer/Footer";
import classes from "./Second.module.css";

const Second = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Firstcomponent />
      <Footer />
    </div>
  );
};

export default Second;
