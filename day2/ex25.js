let firstname = 'Vinod';
let lastname = 'Kumar';
let city = 'Bangalore';

// let p1 = { firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore' };
// let p1 = { firstname: firstname, lastname: lastname, city: city };
let p1 = { firstname, lastname, city, state: 'Karnataka' };
console.log(p1);
let product = { id: 123, name: 'Apple magic mouse', price: 8500 };
// let id = product.id;
// let name = product.name;
// let price = product.price;
// let category = product.category;
let { id, name, price, category } = product;
console.log('id, name, price, category = ', id, name, price, category);

// function info(person) {
//     console.log(
//         `${person.firstname} ${person.lastname} lives in ${person.city}, ${person.state}`
//     );
// }

// function info(person) {
//     let { firstname, lastname, city, state } = person;
//     console.log(`${firstname} ${lastname} lives in ${city}, ${state}`);
// }

// function info({ firstname, lastname, city, state }) {
//     console.log(`${firstname} ${lastname} lives in ${city}, ${state}`);
// }
const info = ({ firstname, lastname, city, state }) =>
    console.log(`${firstname} ${lastname} lives in ${city}, ${state}`);

info(p1);
