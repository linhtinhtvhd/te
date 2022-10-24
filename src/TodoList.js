import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useState,useContext, useEffect } from "react";
import { TodoContext } from "./state";
const TodoList = () => {
  const {todoList,todoed,setTodoed,}=useContext(TodoContext)
  
  useEffect(()=>{
    localStorage.setItem("TodoList",JSON.stringify(todoList))
    
  },[todoList,todoed])
  return (
    <div className="todo-list-container">
      {todoList.map((res,index)=>{return  <div key={index} className={`todo-item-container ${todoed.includes(res.id)?'done':null}`}  onClick={(e)=>{
        setTodoed(prev=>{

        return [...prev,res.id]
        
      })

      }}>
       {todoed.includes(res.id)? < FaRegCheckCircle color="#9a9a9a" className="item-done-button"/>: < FaRegCircle color="#9a9a9a" className="item-done-button" />}
        <div className="item-title">{res.ac}</div>
      </div>})}
    
    </div>
  );
};

export default TodoList;
