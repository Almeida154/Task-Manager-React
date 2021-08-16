import React from 'react';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Task.css'

const Task = ({ task, taskClick, taskDeletion }) => {
    return (
        <div className="task-container">
            <div className="task-status"
                style={ task.completed ? linearGradient : {} }
                onClick={ () => taskClick(task.id) }>
                { task.completed ?
                    <FontAwesomeIcon
                        style={{ color: '#EAEFBD' }}
                        icon={faThumbsUp} /> :
                    <FontAwesomeIcon
                        style={{ color: '#dbdbdb' }}
                        icon={faThumbsDown} /> }
            </div>
            <div className="task-content">
                <p>{task.title}</p>
                <div className="task-buttons-container">
                    <button className="remove-task-button"
                        onClick={ () => taskDeletion(task.id) }>X</button>
                </div>
            </div>
        </div>
    );
}

const linearGradient = {
    background: 'linear-gradient(90deg, rgba(26,117,27,1) 0%, rgba(84,140,47,1) 100%)'
}

 
export default Task;