import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import '../css/TaskDetail.css';

const TaskDetail = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="task-detail-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, minus? Harum quidem architecto amet doloremque!</p>
            </div>
            <div className="back-button-container">
                <Button isRadius={true} onClick={handleBackButtonClick}>Voltar</Button>
            </div>
        </>
    );
}
 
export default TaskDetail;