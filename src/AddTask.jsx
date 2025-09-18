import React, { useState } from "react";
import './AddTask.css'

export default function AddTask() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Add Task
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <input/>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <button className="add-task">Add</button>
                    </div>
                </div>
            )}
            </>
    );
}