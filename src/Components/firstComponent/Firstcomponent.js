import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import ToastList from "../CourseGoals/CourseGoalList/ToastList";
import classes from "./FirstComponent.module.css"

const Firstcomponent = (props) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [onMouse, setOnMouse] = useState(false);

    // console.log(list);
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
    }, 3000);
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

// import React, { useEffect, useState } from "react";
// import Button from "../UI/Button";
// import ToastList from "../CourseGoals/CourseGoalList/ToastList";
// import classes from "./FirstComponent.module.css";

// const FirstComponent = (props) => {
// //   const [list, setList] = useState([]);
//   const [count, setCount] = useState(0);
//   const [showingNotifications, setShowingNotifications] = useState([]);
//   const [queuedNotifications, setQueuedNotifications] = useState([]);
  

//   const showToast = () => {
//     if (showingNotifications.length < 3) {
//       const newNotification = {
//         id: count,
//         title: "MSG " + count,
//       };
//       if (showingNotifications.length === 0) {
//         setShowingNotifications([newNotification]);
//       } else {
//         setQueuedNotifications((prevQueue) => [...prevQueue, newNotification]);
//       }
//       setCount((prevCount) => prevCount + 1);
//     }
//   };
  

//   const deleteItemHandler = (notificationId) => {
//     setShowingNotifications((prevNotifications) => {
//       const updatedNotifications = prevNotifications.filter(
//         (notification) => notification.id !== notificationId
//       );
//       return updatedNotifications;
//     });
//   };

//   useEffect(() => {
//     if (showingNotifications.length > 0) {
//       const timer = setTimeout(() => {
//         deleteItemHandler(showingNotifications[0].id);
//       }, 3000);
//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [showingNotifications]);
  

//   useEffect(() => {
//     if (queuedNotifications.length > 0 && showingNotifications.length < 3) {
//       const nextNotifications = queuedNotifications.slice(0, 3 - showingNotifications.length);
//       setShowingNotifications((prevNotifications) => [...prevNotifications, ...nextNotifications]);
//       setQueuedNotifications((prevQueue) => prevQueue.slice(nextNotifications.length));
//     }
//   }, [queuedNotifications, showingNotifications]);
  
//   console.log(showingNotifications)

//   return (
//     <div className={classes.container}>
//       <div>
//         <Button handleClick={showToast}>Show Toast</Button>
//       </div>
//       <ToastList onDelete={deleteItemHandler} items={showingNotifications} />

//     </div>
//   );
// };

// export default FirstComponent;

// import React, { useEffect, useState } from "react";
// import Button from "../UI/Button";
// import ToastList from "../CourseGoals/CourseGoalList/ToastList";
// import classes from "./FirstComponent.module.css";

// const Firstcomponent = (props) => {
//     const [list, setList] = useState([]);
//     const [secondList, setSecondList] = useState([]);
//     const [count, setCount] = useState(1);
//     const [onMouse, setOnMouse] = useState(false);

//     console.log("secondList", secondList);
//     console.log("list..............................", list);
//     //   console.log('list')

//     const showtoast = () => {
//         let toastProperty = {
//             id: count,
//             title: "MSG " + count,
//         };
//         if (list.length < 3) {
//             //    console.log(list.length);
//             setCount((prev) => prev + 1);
//             //    console.log("show toast fire");
//             setList([toastProperty, ...list]);
//             setSecondList([toastProperty, ...list]);
//             // setSecondList(list.slice((0, list.length)));
//         } else {
//             // setCount((prev) => prev + 1);
//             // setList((prevList) => [
//             //     toastProperty,
//             //     ...prevList.slice(0, prevList.length - 1),
//             // ]);
//             setCount((prev) => prev + 1);
//             setList([toastProperty, ...list]);
//             setSecondList((prevList) => [
//                 toastProperty,
//                 ...prevList.slice(0, prevList.length - 1),
//             ]);
//         }
//         //   setCount((prev) => prev + 1);
//         //   let toastProperty = {
//         //     id: count,
//         //     title: "MSG " + count,
//         //   };
//         //   console.log("show toast fire");
//         //   setList([toastProperty , ...list]);
//     };

//     const deleteItemHandler = (goalId) => {
//         setList((prev) => {
//             const updatedGoals = prev.filter((goals) => goals.id !== goalId);
//             return updatedGoals;
//         });
//         setSecondList((prev) => {
//             const updatedGoals = prev.filter((goals) => goals.id !== goalId);
//             return updatedGoals;
//         });
//     };

//     useEffect(() => {
//         // console.log(onMouse);
//         const interval = setInterval(() => {
//             if (list.length) {
//                 deleteItemHandler(list[list.length - 1].id);
//             }
//         }, 7000);

//         return () => {
//             clearInterval(interval);
//             // console.log('clear interval')
//         };
//     }, [onMouse, list]);

//     return (
//         <div className={classes.container}>
//             <div>
//                 <Button handleClick={showtoast}>Show Toast</Button>
//             </div>
//             <ToastList
//                 onDeleteItem={deleteItemHandler}
//                 items={secondList}
//                 setOnMouse={setOnMouse}
//             />
//         </div>
//     );
// };

// export default Firstcomponent;

