let p1 = { firstname: 'Vinod', lastname: 'Kumar' };

console.log(p1);
console.log(p1.firstname);
console.log('p1.hasOwnProperty("firstname")', p1.hasOwnProperty('firstname'));
console.log("p1.hasOwnProperty('email')", p1.hasOwnProperty('email'));
console.log('p1 is ', p1);
console.log('p1 is ' + p1);

// Method 1 -- using the Object.create() to create an object
const config = {
    display: function () {
        console.log('Name:', this.name);
        console.log('Salary:', this.salary);
        console.log('Department:', this.dept);
    },
};

const createEmployee = (name, salary, dept) => {
    let emp1 = Object.create(config);
    emp1.name = name;
    emp1.salary = salary;
    emp1.dept = dept;
    return emp1;
};

let e1 = createEmployee('John', 2000, 'ADMIN');
let e2 = createEmployee('Jane', 2200, 'ACCOUNTING');

console.log(e1);
console.log(e2);
