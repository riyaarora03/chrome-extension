import React, { useState, useEffect } from 'react';
import '../css/growth.css';
import Card from '../components/card';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

const Checklist: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    // Load tasks from localStorage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim() === '') return;
    
    const newTask: Task = {
      id: Date.now(),
      text: task,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleToggleComplete = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div >
      <Card title="Growth Checker" onClick={() => {}}>
      <form onSubmit={handleAddTask}>
        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            required
          />
          <button className="add" type="submit">Add</button>
        </div>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span>{task.text}</span>
            <button className="remove" onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      </Card>
    </div>
  );
};

export default Checklist;
