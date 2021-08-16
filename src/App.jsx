import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Add from './components/Add';
import Tasks from './components/Tasks'
import './css/App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'estudar matemática',
      completed: false
    },
    {
      id: 2,
      title: 'revisar biologia',
      completed: true
    }
  ]);

  const handleTaskClick = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return {
        ...task, completed: !task.completed
      }
      return task;
    })
    setTasks(newTasks);
  }

  const handleTaskAddition = taskTitle => {
    const newTasks = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }];
    setTasks(newTasks);
  }

  const handleTaskDeletion = id => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }
  
  return (
    <div className="app-container">
      <h2 className="app-title">My Tasks</h2>
      <Add taskAddition={ handleTaskAddition } />
      <Tasks
        tasks={ tasks }
        taskClick={ handleTaskClick }
        taskDeletion={ handleTaskDeletion } />
    </div>
  );
}

export default App;