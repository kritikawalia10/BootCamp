const express = require('express');
const chalk = require('chalk');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    chalk.blue(`[${new Date().toISOString()}]`) +
    chalk.green(` ${req.method}`) +
    chalk.yellow(` ${req.url}`)
  );
  next();
});

app.get('/', (req, res) => res.send('Welcome to the Express App!'));
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(chalk.magenta(`🚀 Server is running on http://localhost:${PORT}`));
});
