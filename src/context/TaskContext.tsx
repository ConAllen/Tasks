// context/TaskProvider.tsx
import React, { useMemo, useReducer } from 'react';
import { initialState, TaskContext, taskReducer, } from './TaskReducer';



export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const contextValue = useMemo(() => ({
        initialState: state,
        dispatch,
    }), [state, dispatch]);


    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};