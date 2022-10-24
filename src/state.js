import { useState, createContext } from 'react';
const TodoContext = createContext();

function TodoProvider({ children }){
    const [todoList,setTodoList]=useState([{ac:'Build some web',id:1},{ ac:'Do excercises',id:2},{ac:'Go shopping',id:3}])
    const [todoed,setTodoed]=useState([])
    const [todo,setTodo]=useState([todoList])
    

    const value={todoList,setTodoList,todoed,setTodoed,todo,setTodo}
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoProvider;

export { TodoContext };