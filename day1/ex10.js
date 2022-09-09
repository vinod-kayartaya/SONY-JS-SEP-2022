// camelCaseForAllIdentifiersExceptClasses
// PascalCaseForClasses
var myName = 'Vinod';
var myCity = 'Bangalore';

function display() {
    var myName = 'Raj';
    var myCity = 'Delhi';
    console.log(myName, '-->', myCity);

    {
        let myName = 'Vinay';
        let myCity = 'Hassan';
        console.log(myName, '-->', myCity);
    }

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log(myName, '-->', myCity);
}

display();

console.log(myName, '-->', myCity);

// prefer "const" over "let", and "let" over "var"

const num = 123;
// num++; // error
console.log(num);
