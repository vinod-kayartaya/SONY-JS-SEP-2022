// constructor Person
function Person(firstname, lastname = '', city = 'Bangalore') {
    // "this" is the reference to the newly constructed object (by the "new" keyword)
    // the function Person() acts like a constructor, which is used for initializing the object,
    // by adding new member variables (properties)
    this.firstname = firstname;
    this.lastname = lastname;
    this.city = city;
}
Person.prototype.fullname = function () {
    return this.firstname + ' ' + this.lastname;
};

let p1 = new Person();
console.log(p1);

// constructor Employee
function Employee(id, firstname, lastname, city, email, salary) {
    Person.call(this, firstname, lastname, city);
    this.id = id;
    this.email = email;
    this.salary = salary;
}

// emp1 --> {ownProperties} -> Employee (constructor) -> Person (prototype) -> Object (prototype)
// Employee.prototype = Person.prototype;
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
// add additional methods to the Employee prototype here:
Employee.prototype.display = function () {
    console.log('ID:', this.id);
    console.log('Name:', this.fullname());
    console.log('Salary: $', this.salary);
};

let emp1 = new Employee(
    1234,
    'John',
    'Doe',
    'Dallas',
    'johndoe@xmpl.com',
    2300
);
console.log(emp1);
