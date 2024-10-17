import React from "react";

function ListTasks({ tasksList, removeTaskCallback, toggleTaskStatus }) {
  return (
    <div>
      {tasksList.map(task => (
        <div key={task.id} className={`todo-item ${task.done ? 'struck' : ''}`}>
          <span onClick={() => toggleTaskStatus(task.id)}>
            {task.text} - {task.date.toLocaleDateString()} at {task.time}
          </span>
          <div>
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.done ? 'Undo' : 'Mark Done'}
            </button>
            <button onClick={() => removeTaskCallback(task.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTasks;
