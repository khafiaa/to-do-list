import { useState } from 'react';
import { Column } from './Column'; // Assuming './Column' exports the Column component
import { DndContext } from '@dnd-kit/core';
import './TaskList.css'
import AddTask from "./AddTask.jsx";

const COLUMNS = [
    { id: 'TODO', title: 'To Do' },
    { id: 'IN_PROGRESS', title: 'In Progress' },
    { id: 'DONE', title: 'Done' },
];

const TASKS = [];

export default function TaskList() {
    const [tasks, setTasks] = useState(TASKS);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id;
        const newStatus = over.id;

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        status: newStatus,
                    }
                    : task,
            ),
        );
    }

    return (
        <div className="class">
            <div className="idk">
                <AddTask onAddTask={handleAddTask} />
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="columns-wrapper">
                        {COLUMNS.map((column) => {
                            return (
                                <Column
                                    key={column.id}
                                    column={column}
                                    tasks={tasks.filter((task) => task.status === column.id)}
                                />
                            );
                        })}
                    </div>
                </DndContext>
            </div>
        </div>
    );
}


