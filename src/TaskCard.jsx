import { useDraggable } from '@dnd-kit/core';
import './TaskCard.css';

export function TaskCard({ task }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const draggableStyle = transform
        ? {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
        }
        : undefined;

    let wrapperColorClass = '';
    if (task.status === 'TODO') {
        wrapperColorClass = 'color-type-a';
    } else if (task.status === 'IN_PROGRESS') {
        wrapperColorClass = 'color-type-b';
    } else if (task.status === 'DONE') {
        wrapperColorClass = 'color-type-c'
    }

    // Combine with existing class names
    const wrapperClassName = `task-wrapper ${wrapperColorClass}`;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="task-card"
            style={draggableStyle}
        >
            <div className={wrapperClassName}> {/* Apply dynamic class here */}
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
            </div>
        </div>
    );
}
