let names = ['Vinod', 'Shyam', 'Naveen', 'Harish', 'Nagesh'];

// in other languages:
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

// in JS:
const callback = (name, index) => console.log(index, name.toUpperCase());
names.forEach(callback);

let people = [
    { firstname: 'Vinod', lastname: 'Kumar' },
    { firstname: 'Shyam', lastname: 'Sundar' },
];
let x = people.forEach((p) => (p.firstname = p.firstname.toUpperCase()));
console.log(x);
