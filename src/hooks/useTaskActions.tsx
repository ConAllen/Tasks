// hooks/useTaskActions.ts

import { useContext } from "react";
import { TaskReducerActionType, type Task } from "../types";
import { setTasks, TaskContext } from "../context/TaskReducer";
import { fetchAllTasks } from "../clients/fetchTasks";


export const useTaskActions = () => {

    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('TaskContext is undefined. Make sure TaskContainer is wrapped in TaskProvider.');
    }

    const { initialState, dispatch } = context;
    const { tasks, isLoading, error } = initialState;



    const addTask = (title: string) => {
        const taskToAdd: Task = {
            id: Date.now().toString(),
            title,
            completed: false,
        };
        dispatch({ type: TaskReducerActionType.ADD_TASK, payload: taskToAdd });
    };

    const toggleTask = (id: string) => {
        if (!id) return;
        dispatch({
            type: TaskReducerActionType.TOGGLE_TASK, payload: id
        });
    };

    const deleteTask = (id: string) => {
        if (!id) return;
        dispatch({
            type: TaskReducerActionType.REMOVE_TASK, payload: id
        });
    };

    const fetchTasks = async () => {
        dispatch({ type: TaskReducerActionType.TASKS_LOADING, payload: true });
        try {
            const tasks: Task[] = await fetchAllTasks();
            dispatch(setTasks(tasks));
        } catch (error) {
            dispatch({ type: TaskReducerActionType.TASKS_ERROR, payload: error as string });
        } finally {
            dispatch({ type: TaskReducerActionType.TASKS_LOADING, payload: false });
        }

    };



    return { addTask, toggleTask, deleteTask, fetchTasks, isLoading, error, tasks };
};
