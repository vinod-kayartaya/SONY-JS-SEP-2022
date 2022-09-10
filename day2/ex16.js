// HOF - Higher order functions
// A function that takes another function/s as parameters
// or return a function

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = nums.filter((n) => n % 2);
console.log(odds);

// function factory --> a function to manufacture another function
// factory function/method --> design pattern, a function manufactures an object (a.k.a virtual constructor)

// const createRedBorder = function () {
//     return '2px solid red';
// };
// const createBlueBorder = function () {
//     return '2px solid blue';
// };
// const createGreenBorder = function () {
//     return '2px solid green';
// };

function createBorderFn(color) {
    // lots of calculations may be there

    return function () {
        return `2px solid ${color}`;
    };
}

function createColoredBorder(color) {
    returnn`2px solid ${color}`;
}

let redBorder = createBorderFn('red')();
let greenBorder = createBorderFn('green')();
let blueBorder = createBorderFn('blue')();

console.log(redBorder);
console.log(blueBorder);
console.log(greenBorder);
