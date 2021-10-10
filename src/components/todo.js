import React from 'react';



const Todo = ({todo, text,id, todolist, setTodo}) =>{

    const deleteHandler = () =>{
        setTodo (todolist.filter((el) => el.id !== id)); //find if matches or not
        // console.log(id);
    };

    const completeHandler = () =>{
        setTodo (todolist.map((task) => {
            if(task.id === id){
                return{
                    ...task, completed : !task.completed 
                };
             }
             return task;
        }))
    };

    return(
        <div className ="todo">
            <li className ={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> 
                <button onClick = {completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick = {deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>

    )

}

export default Todo;




