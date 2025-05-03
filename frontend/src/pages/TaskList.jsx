import { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/taskApi';
import TaskCard from '../components/TaskCard';
import './TaskList.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newCompleted, setNewCompleted] = useState('❌');

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await fetchTasks();
    setTasks(data);
  }

  async function handleAdd() {
    if (newTitle.trim() === '') return;

    // Générer le prochain id en local
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
    const nextId = maxId + 1;

    await createTask({ id: nextId, title: newTitle, completed: newCompleted });

    setNewTitle('');
    setNewCompleted('❌');
    loadTasks();
  }

  async function handleEdit(task) {
    const updatedTitle = prompt('Edit task title:', task.title);
    if (updatedTitle === null) return;

    const updatedCompleted = prompt('Is the task completed? Enter ✅ or ❌:', task.completed);
    if (updatedCompleted !== '✅' && updatedCompleted !== '❌') {
      alert('Invalid completed status. Please enter ✅ or ❌.');
      return;
    }

    await updateTask(task.id, { title: updatedTitle, completed: updatedCompleted });
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  return (
    <div className="task-list-container">
      <h1 className="title">📝 Task List</h1>

      <div className="add-task">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Task"
        />
        <select value={newCompleted} onChange={(e) => setNewCompleted(e.target.value)}>
          <option value="❌">Not Completed ❌</option>
          <option value="✅">Completed ✅</option>
        </select>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="tasks">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks available. Add a new one!</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onUpdate={() => handleEdit(task)}
            />
          ))
        )}
      </div>
    </div>
  );
}
