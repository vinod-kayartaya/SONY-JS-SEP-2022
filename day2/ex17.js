const { execAfterDelay } = require('./utiltities');

function greet() {
    console.log('Hello, and welcome to the training!');
}

console.log('start of script');
execAfterDelay(greet, 1000);
console.log('end of script');
