import React, { useState } from 'react';
import './Addtask.css';
import Button from './Button';
const Addtask = ({handleTaskAdition}) => {
    const [inputData, setInputData] = useState('')
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAdition(inputData);
        setInputData('')
    }

    return ( 
        <div className='addTaskBox'>
            <input onChange={handleInputChange} value={inputData} className="addTaskInput" type="text" alt='type something' />
            <Button className="addButton" onClick={handleAddTaskClick}>Add Task to list</Button>
        </div>
     );
}
 
export default Addtask;