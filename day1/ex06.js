let names = ['Vinod', 'Shyam', 'Naveen', 'Harish', 'Nagesh'];
names.push('Kishore', 'Ravi'); // appends
names.unshift('Kiran', 'Mohan'); // prepends
console.log(`names.length = ${names.length}`);
console.log(names);
let poppedName = names.pop(); // removes the last
let shiftedName = names.shift(); // removes the first
console.log(names);
console.log('poppedName is', poppedName);
console.log('shiftedName is', shiftedName);
let deletedNames = names.splice(1, 3); // at index 1, 3 elements will be deleted
console.log(names);
console.log('deletedNames is', deletedNames);

// ways to empty
// names.length = 0
// names.splice(0, names.length);
// while(names.length) names.pop()
// names = [];

// at index 2, delete 1 elements, and insert 2 more elements
names.splice(2, 1, 'James', 'Jones');
console.log(names);
