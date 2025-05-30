const express = require('express');
const chalk = require('chalk');
const connectDB = require('./dbConnect');         
const userRoutes = require('./routes/User'); 

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

app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(chalk.magenta(`🚀 Server is running on http://localhost:${PORT}`));
});
