import React, { useState, useEffect } from 'react';

import CalendarView from '../components/CalendarView';
import Dashboard from '../components/Dashboard';
import TaskForm from '../components/TaskForm';
import { fetchTasksByDate, createTask, updateTask } from '../Api';

const Task = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const date = selectedDate.toISOString().split('T')[0];
      const tasks = await fetchTasksByDate(date);
      setTasks(tasks);
    };
    fetchTasks();
  }, [selectedDate]);

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = async (task) => {
    if (currentTask) {
      await updateTask(currentTask._id, task);
    } else {
 await createTask(task);
    }
    setIsModalOpen(false);
    setCurrentTask(null);
    setSelectedDate(new Date(selectedDate)); // Refresh tasks
  };

  return (
    <div>
      <CalendarView selectedDate={selectedDate} onChange={setSelectedDate} />
      <button onClick={() => setIsModalOpen(true)}>Add Task</button>
      <Dashboard tasks={tasks} onEditTask={handleEditTask} />
      <TaskForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        onTaskUpdated={handleSaveTask}
        editingTask={currentTask}
      />
    </div>
  );
};

export default Task;