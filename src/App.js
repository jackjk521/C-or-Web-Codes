import logo from './logo.svg';
import './App.css';
import Tasks from "./components/taskdone";

import React, {useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/todolist";


function App() {

  const [ inputTask, setTask ] = useState("");
  const [todolist, setTodo] = useState ([]); 

  // const list = document.querySelectorAll(".sameClass");

  //   list.forEach((elem, index) => {
  //         elem.addEventListener('click', () =>{
  //             elem.innerText = "Completed: Task Number" + (index+1) ;
  //         })
  //     })

  return (
    <div className="App">
    <header>
      <h1>TO DO LIST  {inputTask} </h1> 
    </header>
      <Form todolist = {todolist} setTodo = {setTodo} inputTask = {inputTask} setTask = {setTask}  />
      <TodoList todolist = {todolist} setTodo = {setTodo} />


    {/* <h3> Click on the task if completed </h3>
    <Tasks />
      */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
