class Person {
    constructor(firstname, lastname = '', city = 'Bangalore') {
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
    }
    fullname() {
        return this.firstname + ' ' + this.lastname;
    }
    display() {
        console.log('Name:', this.fullname());
        console.log('City:', this.city);
    }
}

let p1 = new Person('Vinod', 'Kumar');
console.log(p1);

class Employee extends Person {
    constructor(id, firstname, lastname, email, salary, city) {
        // whenever a class inherits from another class,
        // the subclass constructor must invoke the superclass constructor
        super(firstname, lastname, city);
        this.id = id;
        this.email = email;
        this.salary = salary;
    }
    display() {
        console.log('ID:', this.id);
        super.display();
        console.log('Salary: $', this.salary);
    }
}

let emp1 = new Employee(
    1234,
    'John',
    'Doe',
    'johndoe@xmpl.com',
    2300,
    'Dallas'
);
console.log(emp1);
