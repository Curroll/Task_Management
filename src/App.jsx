import React, { useState, useEffect } from 'react';
import AddEditTaskModal from './assets/Component/AddEditTaskModal';
import './App.css';
import generateRandomTasks from './Utils/generateRandomTasks';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      if (Array.isArray(storedTasks) && storedTasks.length > 0) {
        console.log('Loaded tasks from local storage:', storedTasks);
        setTasks(storedTasks);
      } else {
        console.log('No valid tasks in local storage. Generating random tasks...');
        const defaultTasks = generateRandomTasks() || [];
        console.log('Generated default tasks:', defaultTasks);
        setTasks(defaultTasks);
        localStorage.setItem('tasks', JSON.stringify(defaultTasks));
      }
    } catch (error) {
      console.error('Error parsing tasks from local storage:', error);
      console.log('Generating random tasks due to error...');
      const defaultTasks = generateRandomTasks() || [];
      setTasks(defaultTasks);
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    }
  }, []);

  // Save tasks to local storage whenever they change (but avoid overwriting on initial load)
  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Function to handle saving a task
  const handleSaveTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsModalOpen(false);
  };

  // Function to delete a task
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Management System</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Task</button>

      {/* Render the modal */}
      <AddEditTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      />

      {/* Display the list of tasks */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks found. Add a task to get started!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>Assignee: {task.assignee}</p>
              <p>Status: {task.status}</p>
              <p>Start Date: {task.startDate}</p>
              <p>End Date: {task.endDate}</p>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
