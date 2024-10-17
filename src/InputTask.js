// InputTask.js
import React, { useState } from "react";

function InputTask({ addTaskCallback }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTaskCallback(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Add a new task" 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default InputTask;
