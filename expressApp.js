const express = require('express');
const chalk = require('chalk');
const connectDB = require('./dbConnect');         
const User = require('./userModel');      

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

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully!', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(chalk.magenta(`🚀 Server is running on http://localhost:${PORT}`));
});
