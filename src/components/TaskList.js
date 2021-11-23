import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks, handleDeleteClick}) {

  const tasksToDisplay = tasks.map(task => <Task key={uuid()} category={task.category} text={task.text} handleClick = {handleDeleteClick}/>)
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
