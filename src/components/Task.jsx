import React from 'react';
const Task = ({task}) => {
    return ( <h1 className='taskbox'>{task.title}</h1> );
}
 
export default Task;