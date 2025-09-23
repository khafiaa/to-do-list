import React, { useState } from "react";
import './AddTask.css'
// TaskList is not needed here as a direct import for functionality
// import TaskList from "./TaskList.jsx"; // Remove this line

export default function AddTask({ onAddTask }) { // Accept onAddTask as a prop
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState(''); // State for task name input
    const [taskDetails, setTaskDetails] = useState(''); // State for task details input

    const toggleModal = () => {
        setModal(!modal);
        if (modal) {
            setTaskName('');
            setTaskDetails('');
        }
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const handleAddTaskClick = () => {
        if (taskName.trim() === '') {
            alert('Task name cannot be empty!');
            return;
        }

        const newTask = {
            id: Date.now().toString(),
            title: taskName,
            description: taskDetails,
            status: 'TODO',
        };

        onAddTask(newTask);
        setTaskName('');
        setTaskDetails('');
        toggleModal();
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Add Task
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Add Task</h2>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                        <div className="input-boxes">
                            <input
                                className="add-task-name"
                                placeholder="Enter Task Name"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                            />
                            <input
                                className="add-task-details"
                                placeholder="Enter Task Details"
                                value={taskDetails}
                                onChange={(e) => setTaskDetails(e.target.value)}
                            />
                        </div>
                        <button className="add-task" onClick={handleAddTaskClick}>Add</button>
                    </div>
                </div>
            )}
        </>
    );
}
