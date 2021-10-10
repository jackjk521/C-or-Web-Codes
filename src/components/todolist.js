import React from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import Todo from "./todo";

const TodoList = ({todolist, setTodo}) =>{

    return(
        <div className="todo-container">
        <ul className="todo-list">
        {todolist.map(todo => (
                <Todo 
                text = {todo.text} 
                id = {todo.id} 
                todolist = {todolist} 
                todo  = {todo}
                setTodo = {setTodo} />
        ))}
        </ul>
        </div>
    )
}

export default TodoList;