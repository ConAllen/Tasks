import React from 'react';

type TaskItemProps = {
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed, onToggle, onDelete }) => {
    return (
        <div className="task-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
                style={{ marginRight: 8 }}
                className='task-checkbox'
            />
            <span style={{ textDecoration: completed ? 'line-through' : 'none', flex: 1 }}>
                {title}
            </span>
            <button onClick={() => onDelete(id)} style={{ marginLeft: 8 }}>
                Delete
            </button>
        </div>
    );
};

export default TaskItem;