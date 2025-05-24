const fs = require('fs');

fs.writeFileSync('notes.txt', 'This is my note.');

const data = fs.readFileSync('notes.txt','utf-8');

console.log('File content :',data);