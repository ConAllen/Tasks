export type Task = {
    id: string;
    title: string;
    completed: boolean;
}

export type TaskAction = {
    type: TaskReducerActionType;
    payload?:
    | string
    | boolean
    | Error
    | Task
    | Task[]
    | undefined;
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error"
export const enum TaskReducerActionType {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
    TOGGLE_TASK = 'TOGGLE_TASK',
    UPDATE_TASK = 'UPDATE_TASK',
    TASKS_LOADING = 'TASKS_LOADING',
    TASKS_ERROR = 'TASKS_ERROR',
    SET_TASKS = 'SET_TASKS',
}


export type TaskState = {
    tasks: Task[];
    isLoading: boolean;
    error: Error | null;
}