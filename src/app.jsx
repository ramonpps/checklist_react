import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './app.css'
import Addtask from './components/Addtask';
import Tasks from './components/Tasks'

const App = ( ) => {
  // let message = 'Ramon';
  const [tasks, setTasks] = useState([
    {id: '1', title: 'study react',done: 'no'}, {id: '2', title: "mom's birthday", done: 'yes'}, {id: '3', title: 'sleep', done: 'no'}
  ]);
  const handleTaskAdition = (taskTitle) => {
      const newTasks = [...tasks, {title: taskTitle, id: uuidv4(), completed: false}]
      setTasks(newTasks)}
  return (
    <div className="mainsquare">
        <h1 className='title'><center>Tasklist</center></h1>
        <Addtask handleTaskAdition={handleTaskAdition} />
        <div className="minorsquare">
          <Tasks tasks={tasks} /></div>;
        
    </div>
  );
  };
  
export default App;