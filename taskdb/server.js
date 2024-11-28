const express = require('express');
const connectDB = require('./db');
const taskRoutes = require('./taskRoutes');
const cors = require('cors');

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/tasks', taskRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
