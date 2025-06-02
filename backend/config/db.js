const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kritikawalia1003:kritikawalia10@hostify1.badh93q.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(chalk.green('✅ MongoDB connected successfully!'));
  } catch (error) {
    console.log(chalk.red('❌ MongoDB connection failed:', error.message));
    process.exit(1);
  }
};

module.exports = connectDB;
