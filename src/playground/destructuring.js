//
// Object destructureing

//
// const person = {
//   name: 'Bob',
//   age: 39,
//   location: {
//     city: 'Fresno',
//     temp: 35
//   }
// };

// Old way
// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);

// New way with ES6 Destructuring

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//   title: '',
//   author: '',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//


// const address = ['4 Tiller Ave', 'Caruthers', 'California', '93609'];

// const [, city = 'Austin', state = 'Texas'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);






