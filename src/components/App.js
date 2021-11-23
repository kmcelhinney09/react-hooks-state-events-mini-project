import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)

    
  function removeTask(text){
    const updatedTasks = taskList.filter(task => task.text !== text)
    setTaskList(updatedTasks)
  }
  
  function onCatagoryClick(category){
    const updatedTasks = TASKS.filter(task => {
      if(category==="All") return true;
      return task.category === category
    })
    
    setTaskList(updatedTasks)
  }
  
  function onTaskFormSubmit(newTask){
    setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCatagoryClick={onCatagoryClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} handleDeleteClick={removeTask}/>
    </div>
  );
}

export default App;
