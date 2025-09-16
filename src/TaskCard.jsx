import { useDraggable } from '@dnd-kit/core';

export function TaskCard({ task }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const style = transform
        ? {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
        }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="task-card"
            style={style}
        >
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
        </div>
    );
}
