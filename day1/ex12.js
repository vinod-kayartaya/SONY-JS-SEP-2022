// Method 2 - create a named prototype (using constructor function)
// make sure to use the PascalCase for consturctor
function Employee(name, email, dept, salary) {
    // adding properties to the newly constructed object (by the "new" keyword)
    this.name = name;
    this.email = email;
    this.dept = dept;
    this.salary = salary;
}
Employee.prototype.display = function () {
    console.log('Name =', this.name);
    console.log('Email =', this.email);
    console.log('Salary =', this.salary);
    console.log('Department =', this.dept);
};
Employee.prototype.toString = function () {
    return `Employee(Name=${this.name},Email=${this.email})`;
};

let e1 = new Employee('John', 'john@xmpl.com', 'ADMIN', 2000);
let e2 = new Employee('Jane', 'jane@xmpl.com', 'MARKETING', 2500);

console.log(e1);
console.log('e1 = ' + e1); // e1.toString() is implicitly called
console.log(e1.display());
