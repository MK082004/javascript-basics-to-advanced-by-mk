// Objects(Ashya)
// English Definition: Objects are collections of key - value pairs where keys are strings(or Symbols) and values can be any data type.

// Urdu Definition: Objects key - value pairs ka collection hain jahan keys strings(ya Symbols) hoti hain aur values koi bhi data type ho sakti hain.

// Object Creation and Methods

// Object creation
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    // Method (property ke tor par function)
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    // Shorthand method (ES6)
    greet() {
        return `Hello, I'm ${this.getFullName()}`;
    },

    // Computed property names (ES6)
    ["id" + Math.random()]: "some value"
};

console.log(person.getFullName()); // "John Doe"
console.log(person.greet());       // "Hello, I'm John Doe"

// Accessing properties
console.log(person.firstName);     // Dot notation
console.log(person["lastName"]);   // Bracket notation


// Object Destructuring
// English Definition: Object destructuring allows extracting properties from objects into distinct variables.

// Urdu Definition: Object destructuring objects ki properties ko distinct variables mein extract karne ki ijazat deta hai.

const { firstName, age } = person;
console.log(firstName, age); // "John 30"

// With different variable names
const { firstName: fName, age: userAge } = person;
console.log(fName, userAge); // "John 30"

// Default values
// const { firstName, age, city = "Unknown" } = person;
console.log(city); // "Unknown"

// Nested destructuring
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
const { name, address: { city: userCity } } = user;
console.log(userCity); // "New York"

// Object Spreading(ES6)

const originalPerson = { name: "John", age: 30 };
const updatedPerson = { ...originalPerson, age: 31, city: "New York" };
console.log(updatedPerson); // {name: "John", age: 31, city: "New York"}

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // {a: 1, b: 3, c: 4}