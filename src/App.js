import "./App.css";
import ListTasks from "./ListTasks";
import InputTask from "./InputTask";
import { useState } from "react";
import Calendar from 'react-calendar'; // Import the Calendar component
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

function App() {
  const [tasks, setTasks] = useState([]); // Initialize tasks as an array
  const [date, setDate] = useState(new Date()); // State to manage selected date

  const addTasks = (taskText) => {
    const now = new Date();
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      done: false,
      date: date,
      time: now.toLocaleTimeString(), // Add current time to the task
    };
    setTasks([...tasks, newTask]); // Add the new task to the tasks array
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task // Toggle the 'done' status
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Remove the task
  };

  return (
    <div className="App container text-center">
      <Calendar 
        onChange={setDate} // Update date state when date is changed
        value={date} // Set the currently selected date
      />
      <InputTask addTaskCallback={addTasks} />
      <ListTasks 
        tasksList={tasks} 
        toggleTaskStatus={toggleTaskStatus} // Pass toggle function
        removeTaskCallback={removeTask} // Pass remove function
      />
    </div>
  );
}

export default App;
