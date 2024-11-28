import React from 'react';

const Dashboard = ({ tasks, onEditTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task._id} onClick={() => onEditTask(task)}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Start: {new Date(task.startDate).toLocaleString()} | End: {new Date(task.endDate).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default Dashboard;