import React, { useState } from 'react';

const AddEditTaskModal = ({ isOpen, onClose, onSave }) => {
  const [task, setTask] = useState({
    title: '',
    assignee: '',
    status: 'To Do',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ title: '', assignee: '', status: 'To Do', startDate: '', endDate: '' }); // Reset form
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Assignee"
            value={task.assignee}
            onChange={(e) => setTask({ ...task, assignee: e.target.value })}
            required
          />
          <select
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <input
            type="date"
            placeholder="Start Date"
            value={task.startDate}
            onChange={(e) => setTask({ ...task, startDate: e.target.value })}
            required
          />
          <input
            type="date"
            placeholder="End Date"
            value={task.endDate}
            onChange={(e) => setTask({ ...task, endDate: e.target.value })}
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="save-button">
              Save Task
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditTaskModal;