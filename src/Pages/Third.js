import React from "react";
import classes from "./Third.module.css";
import Navbar from "../Components/Navbar/Navbar";
// import Firstcomponent from '../Components/firstComponent/Firstcomponent'
import Footer from "../Components/footer/Footer";
import ThirdComponent from "../Components/ThirdComponent/ThirdComponent";

const Third = () => {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <div>
          <ThirdComponent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Third;
