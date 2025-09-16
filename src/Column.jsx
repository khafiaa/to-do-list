import { useDroppable } from '@dnd-kit/core';
import { TaskCard } from './TaskCard';
import './Column.css' // This file will now contain your plain CSS

export function Column({ column, tasks }) {
    const { setNodeRef } = useDroppable({
        id: column.id,
    });

    return (
        <div className="column-container">
            <h2 className="column-title">{column.title}</h2>
            <div ref={setNodeRef} className="task-list">
                {tasks.map((task) => {
                    return <TaskCard key={task.id} task={task} />;
                })}
            </div>
        </div>
    );
}
