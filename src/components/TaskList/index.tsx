import React from 'react';
import TaskItem from '../TaskItem';

type Task = {
    id: string;
    title: string;
    completed: boolean;
};

type TaskListProps = {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onDeleteTask?: (id: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDeleteTask }) => {
    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <TaskItem
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        onToggle={onToggleComplete}
                        onDelete={() => onDeleteTask && onDeleteTask(task.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default TaskList;