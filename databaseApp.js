const connectDB = require('./dbConnect');
const User = require('./User');
const chalk = require('chalk');

const run = async () => {
  await connectDB();

  // Insert a new user
  const newUser = new User({ name: 'Kritika', email: 'kritika@example.com' });
  await newUser.save();
  console.log(chalk.blue('👤 User saved successfully'));

  // Retrieve all users
  const users = await User.find();
  console.log(chalk.yellow('\n📋 All Users:'));
  users.forEach(user => console.log(`- ${user.name} (${user.email})`));

  process.exit(); // Exit script
};

run();
