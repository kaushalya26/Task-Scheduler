import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const TaskForm = ({ isOpen, onClose, taskToEdit, onSave }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
    startDate: '',
    endDate: '',
    isReminderSet: false,
    reminderTime: '',
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({
        title: '',
        description: '',
        status: 'Pending',
        startDate: '',
        endDate: '',
        isReminderSet: false,
        reminderTime: '',
      });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={task.title} onChange={handleChange} required placeholder="Title" />
        <textarea name="description" value={task.description} onChange={handleChange} required placeholder="Description" />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input type="datetime-local" name="startDate" value={task.startDate} onChange={handleChange} required />
        <input type="datetime-local" name="endDate" value={task.endDate} onChange={handleChange} required />
        <label>
          <input type="checkbox" name="isReminderSet" checked={task.isReminderSet} onChange={() => setTask({ ...task, isReminderSet: !task.isReminderSet })} />
          Set Reminder
        </label>
        {task.isReminderSet && (
          <input type="datetime-local" name="reminderTime" value={task.reminderTime} onChange={handleChange} required />
        )}
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default TaskForm;
