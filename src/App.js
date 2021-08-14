import React, { useState } from 'react';
import Tasks from './components/Tasks'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar matemática',
      completed: false
    },
    {
      id: '2',
      title: 'revisar biologia',
      completed: true
    }
  ]);
  return (
    <div className='container'>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;