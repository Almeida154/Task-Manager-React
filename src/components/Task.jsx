import React from 'react';
import { useHistory } from 'react-router-dom';

import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Task.css';
import { CgTrash } from 'react-icons/cg';

const Task = ({ task, taskClick, taskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailClick = () => {
        history.push(`/${task.title}`)
    }

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
            <div className="task-content" onClick={handleTaskDetailClick}>
                <p>{task.title}</p>
            </div>
            <div className="task-button-container">
                <button className="remove-task-button"
                    onClick={() => taskDeletion(task.id)}><CgTrash />
                </button>
            </div>
        </div>
    );
}

const linearGradient = {
    background: 'linear-gradient(90deg, rgba(26,117,27,1) 0%, rgba(84,140,47,1) 100%)'
}

 
export default Task;