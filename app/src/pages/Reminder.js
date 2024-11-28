import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const Reminder = () => {
  const handleSuccess = () => {
    toast.success('Task completed successfully!');
  };

  const handleError = () => {
    toast.error('There was an error!');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
    </div>
  );
};

export default Reminder;
