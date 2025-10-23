// Arrays(Silsilay)
// English Definition: Arrays are ordered collections of values that can be of any type.

// Urdu Definition: Arrays values ke ordered collection hain jo kisi bhi type ke ho sakte hain.

// Array Creation and Methods

// Array creation
let fruits = ["apple", "banana"];

// Adding/removing elements
fruits.push("orange");        // Aakhir: ["apple", "banana", "orange"]
fruits.pop();                 // Aakhir: ["apple", "banana"]
fruits.unshift("strawberry"); // Ibtida: ["strawberry", "apple", "banana"]
fruits.shift();               // Ibtida: ["apple", "banana"]

// Other methods
fruits.includes("apple");     // true
fruits.indexOf("banana");     // 1
fruits.slice(1, 3);           // ["banana"] (hissa nikalta hai)
fruits.splice(1, 1, "grape"); // Index 1 par 1 element hata kar "grape" add karta hai

// Array Iteration Methods

let numbers = [1, 2, 3, 4, 5];

// map - transformed elements ke saath naya array banata hai
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - test pass karne wale elements ke saath naya array banata hai
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce - array ko single value mein reduce karta hai
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// find - pehla element return karta hai jo condition ko satisfy karta hai
let found = numbers.find(num => num > 3);
console.log(found); // 4

// some - test karta hai ke kam az kam ek element test pass karta hai
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - test karta hai ke tamam elements test pass karte hain
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// forEach - har element ke liye function execute karta hai
numbers.forEach((num, index) => console.log(num, index));

// Array Destructuring

const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1, 2, [3, 4, 5]

// Skipping elements
// const [first, , third] = numbers;
console.log(first, third); // 1, 3

// Default values
const colors = ["red"];
const [primary, secondary = "blue"] = colors;
console.log(primary, secondary); // "red", "blue"

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1