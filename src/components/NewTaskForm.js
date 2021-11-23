import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const renderedOptions = categories.map(category => category==="All"? null:<option key={category} value={category}>{category}</option>)
  const [formData, setFormData] = useState({
    text:"",
    category: ""
  })

  function handleFormChange(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]:value})
  }

  function handleSubmit(event){
    event.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    setFormData({text:"", category:"Code"})
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}> 
      <label>
        Details
        <input type="text" name="text" placeholder="Enter Detals Here..." value={formData.text} onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFormChange}>
          {renderedOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
