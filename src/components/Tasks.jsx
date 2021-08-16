import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, taskClick, taskDeletion }) => {
    return (
        <>
            {tasks.map(task =>
                <Task
                    task={ task }
                    taskClick={taskClick}
                    taskDeletion={ taskDeletion } />)}
        </>
    )
}

export default Tasks;