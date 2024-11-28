const express = require('express');
const router = express.Router();
const { getTasksByDate, createTask, updateTask } = require('./taskController');

router.get('/:date', getTasksByDate);
router.post('/', createTask);
router.put('/:id', updateTask);

module.exports = router;
