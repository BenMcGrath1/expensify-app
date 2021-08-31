// // Object Destructuring

// const person = {
//   name: 'Rufus',
//   age: 35,
//   location: {
//     city: 'Milford',
//     temp: 90
//   }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Tecumseh and the Prophet',
//   author: 'Peter Cozzens',
//   publisher: {
//     // name: 'Knopf',
//     location: 'Chicago'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

// Array Destructuring

const address = ['700 Signal Hill Drive', 'Milford', 'Ohio', '45150'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['coffee', '$2.00', '$2.50', '$3.00'];

const [desc, smallCost, mediumCost, largeCost] = item;

console.log(`A medium ${desc} costs ${mediumCost}`);
