const fs = require('fs');

// this is the callback for the "fs.readFile" method.
// the parameters are dictated by the readFile itself.
// it's a general practice in Node that the callbacks receive "err" as the first object.
// in this case, either there is an error or there is a content.
function handleFileContent(err, content) {
    if (err) throw err;
    console.log(content);
}

console.log('Start of script');

// blocking code execution (Synchronous method call)

// const content = fs.readFileSync('ex18.js', 'utf-8');
// console.log(content);

// non-blocking or async function call
fs.readFile('../day1/ex01.html', 'utf-8', handleFileContent);

console.log('End of script');
