// hooks/useTaskActions.ts

import { useContext } from "react";
import { TaskReducerActionType, type Task } from "../types";
import { TaskContext } from "../context/TaskReducer";


export const useTaskActions = () => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('TaskContext is undefined. Make sure TaskContainer is wrapped in TaskProvider.');
    }

    const { initialState, dispatch } = context;
    const { tasks } = initialState;

    const addTask = (title: string) => {
        const taskToAdd: Task = {
            id: Date.now().toString(),
            title,
            completed: false,
        };
        dispatch({ type: TaskReducerActionType.ADD_TASK, payload: taskToAdd });
    };

    const toggleTask = (id: string) => {
        dispatch({
            type: TaskReducerActionType.TOGGLE_TASK, payload: id
        });
    };

    const deleteTask = (id: string) => {
        dispatch({
            type: TaskReducerActionType.REMOVE_TASK, payload: id
        });
    };

    const fetchTasks = () => {
        return tasks;
    };

    return { addTask, toggleTask, deleteTask, fetchTasks };
};
