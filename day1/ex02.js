// greet(); // error; greet cannot be accessed before initialization

// function greet() {
//     console.log('Hello, world!');
//     console.log('Welcome to JS training using Node.js');
// }

// const greet = function () {
//     console.log('Hello, world!');
//     console.log('Welcome to JS training using Node.js');
// };

// const greet = () => {
//     console.log('Hello, world!');
//     console.log('Welcome to JS training using Node.js');
// };

const greet = () => console.log('Hello, world!');
greet();

const cube = (n) => n * n * n;
console.log('cube of 12 is', cube(12));
