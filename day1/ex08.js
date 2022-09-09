// the return value of the "require('file')" is the value of module.exports in that file
const people = require('./data').people;

// let names = [];
// for (let i = 0; i < people.length; i++) {
//     names.push(people[i].firstname + ' ' + people[i].lastname);
// }

let names = people.map((p) => p.firstname + ' ' + p.lastname);
console.log(names);

let females = people.filter((p) => p.gender === 'Female');
console.log('There are %d females', females.length);

// get the names of all male persons
let maleNames = people
    .filter((p) => p.gender === 'Male')
    .map((p) => p.firstname);

console.log(maleNames);
