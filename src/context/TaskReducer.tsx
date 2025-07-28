import { createContext, type Reducer } from "react";
import { TaskReducerActionType, type Task, type TaskAction, type TaskState } from "../types";

const tasks = [{
    id: '1',
    title: 'Sample Task',
    completed: false
},
{
    id: '2',
    title: 'Another Task',
    completed: true
}]


export const initialState: TaskState = {
    tasks: tasks as Task[],
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


        default:
            return state;
    }
};

export const TaskContext = createContext<{
    initialState: TaskState;
    dispatch: React.Dispatch<TaskAction>;
} | undefined>(undefined);