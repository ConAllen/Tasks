import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

import { useTaskActions } from '../hooks/useTaskActions';

const TaskContainer: React.FC = () => {

    const { addTask, toggleTask, deleteTask, fetchTasks } = useTaskActions();

    const onAddTask = (task: string) => {
        addTask(task);
    }

    const onDeleteTask = (id: string) => {
        deleteTask(id);
    };

    const onCompleteTask = (id: string) => {
        toggleTask(id);
    };



    return (
        <div>
            <h2>Tasks</h2>
            <TaskInput onAddTask={onAddTask} />
            <TaskList onToggleComplete={onCompleteTask} onDeleteTask={onDeleteTask} tasks={fetchTasks()} />
        </div>
    );
};

export default TaskContainer;