import React, { useContext } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskReducer';

const TaskContainer: React.FC = () => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('TaskContext is undefined. Make sure TaskContainer is wrapped in TaskProvider.');
    }

    const { initialState } = context;
    const { tasks } = initialState;

    const onAddTask = (task: string) => {
        console.log(`Task added: ${task}`);
    };

    const onDeleteTask = (id: string) => {
        console.log(`Task deleted: ${id}`);
    };

    const onCompleteTask = (id: string) => {
        console.log(`Task completed: ${id}`);
    };



    return (
        <div>
            <h2>Tasks</h2>
            <TaskInput onAddTask={onAddTask} />
            <TaskList onToggleComplete={onCompleteTask} onDeleteTask={onDeleteTask} tasks={tasks} />
        </div>
    );
};

export default TaskContainer;