// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import classes from "./ThirdComponent.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ThirdComponent() {
  const [products, setProducts] = useState([]);
  const [show,setShow]=useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 5;

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  const fetchProducts = async () => {
    setShow(!show)
    try {
      setLoading(true)
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };
 
  
  const indexOfLastProduct = currentPage * productsPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; 
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if(loading){
    return <img style={{display:"block",margin:"auto"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loading"/>
  }

  return (
    <>
     <button className={classes.buttons} onClick={fetchProducts}  >Fetch</button>
      <div className={classes.parent}>
        {currentProducts.map((item) => {
          return (
            <div key={item.id} className={classes.child}>
              <img src={item.image} alt={item.image} width={"130px"} />
              <p>{item.category}</p>
              <p>{item.decription}</p>
              <p>Price {item.price}</p>
            </div>
          );
        })}
      </div>

     {show && <div className={classes.buttonp}>
        <div className={classes.btns}>
          <button
            className={classes.buttons}
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <button
            className={classes.buttons}
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>}
    </>
  );
}

export default ThirdComponent;
