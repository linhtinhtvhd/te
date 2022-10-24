import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./state";

const Header = () => {
    const {todoList,todoed,}=useContext(TodoContext)
    const [todonew,setTodonew]=useState(todoList.length - todoed.length)
    useEffect(()=>{
        
        setTodonew(todoList.length - todoed.length)
      },[todoList,todoed])
  
    return <div className="header">You have {todonew} tasks left!</div>;
  };
  
  export default Header;