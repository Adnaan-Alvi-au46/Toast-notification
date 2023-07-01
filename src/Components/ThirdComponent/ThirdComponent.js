// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import classes from "./ThirdComponent.module.css";
// // import Button from '../UI/Button'

// const ThirdComponent = () => {
//     const [data,setData]=useState([])
//     // const [page,setPage]=useState(1)
//     const getData=async()=>{
//       try {
//         const res=await axios.get("https://fakestoreapi.com/products",{
//             // params:{
//             //     _page:page,
//             //     _limit:limit
//             // }
//         });
//         setData(res.data)
//         console.log(res.data);
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     // useEffect(()=>{
//     //     getData({page,limit:5})
//     // },[page])
//     useEffect(()=>{
//         getData()
//     },[])

//     return (
//     <>
//     {/* <Button /> */}
//     <div className={classes.parent}>
//         {
//             data.map((item)=>{
//                 return <div key={item.id} className={classes.child}>
//                     <img src={item.image} alt={item.image} width={"130px"}/>
//                     <p>{item.category}</p>
//                     <p>{item.decription}</p>
//                     <p>Price {item.price}</p>
//                 </div>
//             })
//         }
//     </div>
//     {/* <div className={classes.buttonDiv}>
//         <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
//         <button disabled={page===1}>{page}</button>
//         <button onClick={()=>setPage(page+1)}>Next</button>
//     </div> */}
//     </>
//   )
// }

// export default ThirdComponent

import React, { useState, useEffect } from "react";
import axios from "axios";

function ThirdComponent() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 5;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
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

      <div className={classes.buttonp}>
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
      </div>
    </>
  );
}

export default ThirdComponent;
