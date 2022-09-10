const people1 = [
    { name: 'Vinod', city: 'Bangalore' },
    { name: 'Rohit', address: { city: 'Delhi', state: 'Delhi' } },
];

// shallow copy
const people2 = [...people1];
people2.push({ name: 'Rajesh', city: 'Mysore' }); // adds only to people2
people2[0].name = 'Vinod Kumar'; // affects both people1[0] and people2[0]
people2[0].email = 'vinod@vinod.co'; // adds email to both people1[0] and people2[0]
people2[1] = { name: 'Shashi' };

console.log(people1);
console.log(people2);

// deep copy
// serialize and deserialize
const people3 = JSON.parse(JSON.stringify(people1));
people3.push({ name: 'Umesh', city: 'Hassan' });
people3[0].name = 'Vinod Kayartaya';
people3[0].email = 'vinod@kwit.com';

console.log(people1);
console.log(people3);
