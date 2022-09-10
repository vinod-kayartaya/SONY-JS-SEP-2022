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

// search for the index or the actual object with email='vyakobovitzc@blogs.com'
let index = people.findIndex((p) => p.email === 'vyakobovitzc@blogs.com');
if (index === -1) {
    console.log('No person found with email: vyakobovitzc@blogs.com');
} else {
    console.log(
        'A person with email=vyakobovitzc@blogs.com was found at index',
        index
    );
}

let p1 = people.find((p) => p.email === 'vyakobovitzc@blogs.com');

if (!p1) {
    console.log('No person found with email: vyakobovitzc@blogs.com');
} else {
    console.log(p1);
}
