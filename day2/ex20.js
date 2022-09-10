const fs = require('fs/promises');
const path = require('path');
const filename = path.join(__dirname, '..', 'day1', 'ex11.html');

console.log('Start of script');

fs.readFile(filename, 'utf-8')
    .then((content) => console.log('The content of the file is%n', content))
    .catch((err) => console.error('There was an error', err));

console.log('End of script');
console.log('------------------------------------');
