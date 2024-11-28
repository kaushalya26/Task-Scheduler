const cron = require('node-cron');
const Task = require('./task');

cron.schedule('* * * * *', async () => {
  const now = new Date();
  const tasks = await Task.find({ isReminderSet: true, reminderTime: { $lte: now } });

  tasks.forEach(task => {
    console.log(`Reminder for task: ${task.title}`);
    // Send notification logic (email, SMS, etc.)
    task.isReminderSet = false; // Reset reminder after notification
    task.save();
  });
});

console.log('Reminder scheduler running...');
