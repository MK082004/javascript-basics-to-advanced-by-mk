// Functions(Karkardagien)
// Function Declarations(Function elaan)
// Function Declaration

// Definition (EN): Functions are reusable blocks of code that perform specific tasks.
// Definition (UR): Functions code ke reusable block hain jo khaas tasks perform karte hain.

// Function Declaration (hoisted - declaration se pehle call kiya ja sakta hai)
console.log(greet("John")); // "Hello, John!"

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"


// Function Expression
// Definition (EN): A function expression defines a function as part of a larger expression syntax.
// Definition (UR): Function expression function ko kisi bade expression syntax ka hissa tor par define karta hai.

// Function Expression (not hoisted)
// console.log(multiply(4, 5)); // Error: multiply defined nahi hai

// Difference between Named function expression and Anonymous function expression:
// - Named function expression:
//   * Syntax: const fn = function name() { ... }
//   * Faida: recursion ke liye internal name use kar sakte ho (self-reference), debugging mein naam nazar aata hai.
//   * Limit: internal name outer scope mein available nahi hota.
// - Anonymous function expression (without name):
//   * Syntax: const fn = function (...) { ... }
//   * Faida: short, commonly used as callbacks.
//   * Limit: recursion ke liye variable ka naam hi use karna parega; stack traces mein "<anonymous>" aa sakta hai.
// Note: Dono function expressions hoisted nahi hotey (function declarations se farq).

const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // 20

// Named function expression
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120

// fact is not available in the outer scope (internal name only)
console.log(typeof fact); // "undefined"

// Arrow Function(ES6)
// Definition (EN): Arrow functions provide a concise syntax for writing functions and don't have their own this, arguments, super, or new.target.

// Definition (UR): Arrow functions functions likhne ka concise syntax faraham karte hain aur unka apna this, arguments, super, ya new.target nahi hota.

// Single parameter, implicit return
const square = x => x * x;
console.log(square(5)); // 25

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// No parameters
const getRandom = () => Math.random();
console.log(getRandom());

// Multiple statements
const createUser = (name, age) => {
    const user = { name, age };
    return user;
};
console.log(createUser("Alice", 25)); // {name: "Alice", age: 25}

// Returning object literal
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("Bob", 30)); // {name: "Bob", age: 30}

// Function Parameters(Function ke Parameters)
// Default Parameters
// Definition (EN): Parameters are variables listed in the function definition, while arguments are the actual values passed to the function.

// Definition (UR): Parameters woh variables hain jo function definition mein listed hote hain, jabke arguments woh actual values hain jo function ko pass kiye jate hain.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("John")); // "Hello, John!"

// Expressions in default parameters
function createElement(type = "div", classes = []) {
    return { type, classes };
}

// Rest Parameters
// Definition (EN): Rest parameters allow a function to accept an indefinite number of arguments as an array.

// Definition (UR): Rest parameters function ko indefinite number of arguments ko array ki soorat mein qabool karne ki ijazat dete hain.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10)); // 15

// Rest parameter aakhir mein hona chahiye
function displayItems(first, second, ...others) {
    console.log(first, second, others);
}
displayItems(1, 2, 3, 4, 5); // 1, 2, [3, 4, 5]

// Destructuring Parameters
function displayUser({ name, age, city = "Unknown" }) {
    return `${name} is ${age} years old from ${city}`;
}
const user = { name: "John", age: 30 };
console.log(displayUser(user)); // "John is 30 years old from Unknown"

// Array destructuring in parameters
function getFirstAndLast([first, , , last]) {
    return { first, last };
}
console.log(getFirstAndLast([1, 2, 3, 4])); // {first: 1, last: 4}

// Higher - Order Functions(Uunchay Darjay ki Functions)
// Definition (EN): Higher - order functions are functions that either take other functions as arguments or return functions as results.

// Definition (UR): Higher - order functions woh functions hain jo ya toh doosre functions ko arguments ke tor par lete hain ya functions ko results ke tor par return karte hain.

// Function that returns a function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Function that accepts function as parameter
function processArray(arr, processor) {
    return arr.map(processor);
}

const numbers = [1, 2, 3, 4];
const squared = processArray(numbers, x => x * x);
console.log(squared); // [1, 4, 9, 16]

// Closures(Bandish)
// Definition (EN): A closure is a function that has access to variables in its outer(enclosing) scope even after the outer function has returned.

// Definition (UR): Closure woh function hai jo apne outer(enclosing) scope ke variables tak access rakhta hai, chahe outer function return ho chuka ho.

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// Doosri closure ki misaal
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");
console.log(sayHello("John")); // "Hello, John!"
console.log(sayHi("Jane"));    // "Hi, Jane!"


/*************************** this keyword example *********************************/
// this keyword behavior in different function types
const obj = {
    name: "My Object",
    method: function () {
        let arrowFunc = () => {
            function funcDecl() {
                let funcExpr = () => {
                    console.log("Function Expression", this);
                };
                console.log("Function Declaration", this);
                funcExpr();
            }
            console.log("Arrow Function", this);
            funcDecl();
        };
        console.log("Object Method", this);
        arrowFunc();
    }
}
obj?.method();