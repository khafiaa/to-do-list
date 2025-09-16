import { useState } from 'react';
import { Column } from './Column'; // Assuming './Column' exports the Column component
import { DndContext } from '@dnd-kit/core';
import './TaskList.css'

const COLUMNS = [
    { id: 'TODO', title: 'To Do' },
    { id: 'IN_PROGRESS', title: 'In Progress' },
    { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS = [
    {
        id: '1',
        title: 'Research Project',
        description: 'Gather requirements and create initial documentation',
        status: 'TODO',
    },
    {
        id: '2',
        title: 'Design System',
        description: 'Create component library and design tokens',
        status: 'TODO',
    },
    {
        id: '3',
        title: 'API Integration',
        description: 'Implement REST API endpoints',
        status: 'IN_PROGRESS',
    },
    {
        id: '4',
        title: 'Testing',
        description: 'Write unit tests for core functionality',
        status: 'DONE',
    },
];

export default function TaskList() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

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


