import { useState,useContext } from "react";
import { TodoContext } from "./state";
const Form = () => {
  const {setTodoList,todoList}=useContext(TodoContext)
  const [input,setInput]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
   setTodoList(prev=>[...prev,{ac:input,id:todoList.length+1}])
    setInput("")
  }
    return (
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Enter task ..." onChange={(e) => setInput(e.target.value)}/>
        <button>Submit</button>
      </form>
    );
  };
  
  export default Form;
  