export default function TaskCard({ task, onUpdate, onDelete }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <span className="task-title">{task.title}</span>
        <span className="task-status">Completed: {task.completed }</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onUpdate(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}
