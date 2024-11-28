const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'In Progress', 'Completed'] },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isReminderSet: { type: Boolean, default: false },
  reminderTime: { type: Date },
});

module.exports = mongoose.model('Task', taskSchema);
