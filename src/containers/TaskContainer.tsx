import React, { useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

import { useTaskActions } from '../hooks/useTaskActions';

const TaskContainer: React.FC = () => {

    const { addTask, toggleTask, deleteTask, fetchTasks, isLoading, tasks } = useTaskActions();

    const onAddTask = (task: string) => {
        addTask(task);
    }

    const onDeleteTask = (id: string) => {
        deleteTask(id);
    };

    const onCompleteTask = (id: string) => {
        toggleTask(id);
    };

    useEffect(() => {
        fetchTasks();
    }, []);



    return (
        <>
            <h2>Tasks</h2>
            <TaskInput onAddTask={onAddTask} />
            {isLoading && <p>Loading tasks...</p>}
            <TaskList onToggleComplete={onCompleteTask} onDeleteTask={onDeleteTask} tasks={tasks} />
        </>
    );
};

export default TaskContainer;