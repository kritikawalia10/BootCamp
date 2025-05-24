const Hello = require('./hello');
const logger = require('./eventsLogger');

logger.log('User clicked on Login');
logger.log('User signed up');

const person = new Hello("All");
console.log(person.sayHello());