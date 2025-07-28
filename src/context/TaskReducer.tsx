import { createContext, type Reducer } from "react";
import { TaskReducerActionType, type Task, type TaskAction, type TaskState } from "../types";



export const initialState: TaskState = {
    tasks: [] as Task[],
    isLoading: false,
    error: null as Error | null,
}

export const taskReducer: Reducer<TaskState, TaskAction> = (state, action) => {
    switch (action.type) {
        case TaskReducerActionType.ADD_TASK:
            if (action.payload) {
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload as Task]
                };
            }
            return state;
        case TaskReducerActionType.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case TaskReducerActionType.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };

        case TaskReducerActionType.SET_TASKS:
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    tasks: action.payload as Task[]
                };
            }
            return state;
        case TaskReducerActionType.TASKS_LOADING:
            return {
                ...state,
                isLoading: action.payload as boolean
            };



        default:
            return state;
    }
};


// actions
export const setTasks = (tasks: Task[]) => ({
    type: TaskReducerActionType.SET_TASKS,
    payload: tasks,
});

export const addTask = (task: Task) => ({
    type: TaskReducerActionType.ADD_TASK,
    payload: task,
});

export const TaskContext = createContext<{
    initialState: TaskState;
    dispatch: React.Dispatch<TaskAction>;
} | undefined>(undefined);