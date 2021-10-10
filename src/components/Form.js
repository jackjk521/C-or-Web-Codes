import React from 'react';

const Form = ({ todolist, setTodo, inputTask,setTask}) =>{

  const inputTaskHandler = (e) => {
    console.log(e); // event / returns an object
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([
        ...todolist, { text: inputTask, completed: false, incompleted: true, id: Math.random()*10000}
    ])
    setTask("");
  }
    return (
      <form>
        <input value = {inputTask} onChange= {inputTaskHandler} type="text" className="todo-input" />
        <button onClick= {submitHandler} class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}

export default Form;