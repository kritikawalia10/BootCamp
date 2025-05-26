const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter {
    log(message) {
        this.emit('log', message);
    }
}

const logger = new Logger();

logger.on('log', (msg) => {
    const logMessage = `${new Date().toISOString()} - ${msg}\n`;
    const filePath = path.join(__dirname, 'userActions.log');

    fs.appendFile(filePath, logMessage, (err) => {
        if (err) throw err;
        console.log(`Logged: ${msg}`);
    });
});

module.exports = logger;
