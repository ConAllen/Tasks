
import { type Task } from "../types";

const mockedTasks: Task[] = [
    { id: "1", title: "Task 1", completed: false },
    { id: "2", title: "Task 2", completed: true },
    { id: "3", title: "Task 3", completed: false },
    { id: "4", title: "Task 4", completed: true },
    { id: "5", title: "Task 5", completed: false },
];



export async function fetchAllTasks() {
    return new Promise<Task[]>(resolve => {
        setTimeout(() => {
            resolve(mockedTasks);
        }, 1000); 
    });
}