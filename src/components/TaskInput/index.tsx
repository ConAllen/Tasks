import React, { useState, type FormEvent } from 'react';
import '../../index.css'; // Assuming you have a CSS file for styling
interface TaskInputProps {
    onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onAddTask(input.trim());
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="task-input">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button type="submit">Add Task</button>
            </div>
        </form>
    );
};

export default TaskInput;