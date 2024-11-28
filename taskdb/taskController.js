const Task = require('./task');

exports.getTasksByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const tasks = await Task.find({
      startDate: { $lte: new Date(date).setHours(23, 59, 59) },
      endDate: { $gte: new Date(date).setHours(0, 0, 0) },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
