const Hello = require('./hello');
const logger = require('./eventsLogger');
const chalk = require('chalk');

logger.log(chalk.blue('User clicked on Login'));
logger.log(chalk.green('User signed up'));

const person = new Hello("All");
console.log(chalk.yellow(person.sayHello()));
