function process(n1, n2, ...nums) {
    console.log('n1 is', n1);
    console.log('n2 is', n2);
    console.log('nums is', nums);
}

const sum = (...args) => {
    let [param1, param2] = args;
    console.log('first and second args are', param1, param2);
    console.log('this method was called with %d arguments', args.length, args);
};

const p1 = {
    fname: 'Vinod',
    lname: 'Kumar',
    city: 'Bangalore',
    phones: ['9731424784'],
};
const p2 = { ...p1, lname: 'Khanna', country: 'India' };
p2.phones.push('9844083934');
process(12, 34, 56, 78, 9, 102, 49, 596, 66);
sum(12, 3, 4, 5, 6, 7);
console.log(p1);
console.log(p2);
