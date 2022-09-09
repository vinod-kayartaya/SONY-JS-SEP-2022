let p1 = { firstname: 'Vinod', lastname: 'Kumar' };

p1.email = 'vinod@vinod.co';
p1['mobile'] = '9731424784';
p1.address = { city: 'Bangalore', state: 'Karnataka', pincode: 560078 };

console.log(p1);
console.log(p1.firstname, p1.lastname, 'lives in', p1.address.city);
// console.log(Object.keys(p1));
// for (let key in p1) {
//     // p1 is considered as an array of keys; "key" picks one at a time
//     console.log(key, '-->', p1[key]);
// }

let keys = ['id', 'name', 'price'];
let vals = [123, 'Apple Macbook Pro', 195000];

let p2 = {};
for (let i = 0; i < keys.length; i++) {
    p2[keys[i]] = vals[i];
}
console.log(p2);
