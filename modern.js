// Modern JavaScript Features(Jadeed JavaScript Khasoosiyat)
// Destructuring(Tashkeel Torna)
// Definition (EN): Destructuring allows extracting values from arrays or properties from objects into distinct variables.

// Definition (UR): Destructuring arrays se values ya objects se properties ko distinct variables mein extract karne ki ijazat deta hai.

// Array destructuring
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first, second, others); // 1, 2, [3, 4, 5]

// Object destructuring
const { meraNaam, meriAge, ...restProps } = {
    meraNaam: "John",
    meriAge: 30,
    city: "NY",
    country: "USA"
};
console.log(meraNaam, meriAge, restProps); // John 30 {city: "NY", country: "USA"}

// Parameter destructuring
function printUser({ name, age = 25 }) {
    console.log(`${name} is ${age} years old`);
}
printUser({ name: "Alice" }); // "Alice is 25 years old"

// Nested destructuring
const config = {
    database: {
        host: "localhost",
        port: 5432
    },
    cache: {
        enabled: true
    }
};
const { database: { host, port }, cache: { enabled } } = config;
console.log(host, port, enabled); // localhost 5432 true

// Template Literals(Template Strings)
// Definition (EN): Template literals are string literals allowing embedded expressions and multi - line strings.

// Definition (UR): Template literals string literals hain jo embedded expressions aur multi - line strings ki ijazat dete hain.

const name = "John";
const age = 30;

// Basic template literal
console.log(`Hello, my name is ${name} and I'm ${age} years old`);

// Multi-line strings
const message = `
    This is a
    multi-line
    string
`;
console.log(message);

// Expressions
const a = 5, b = 10;
console.log(`The sum is ${a + b}`); // "The sum is 15"

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

const highlighted = highlight`Hello ${name}, you are ${age} years old`;
console.log(highlighted); // "Hello <mark>John</mark>, you are <mark>30</mark> years old"

// Modules(Modules)
// Definition (EN): JavaScript modules allow you to break up your code into separate files for better organization and reusability.

// Definition (UR): JavaScript modules aapko code ko alag alag files mein tor kar behtar tarteeb aur dobara istemal ki salahiyat faraham karte hain.

// Exporting(math.js)

// Named exports
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Default export (module mein sirf ek)
export default function multiply(a, b) {
    return a * b;
}

// Aap aakhir mein bhi export kar sakte hain
// export { PI, add, subtract };

// Importing(app.js)
// Import default export
import multiply, { PI, add } from './math.js';

// Import all named exports as object
import * as math from './math.js';

// Import with different names
import { add as addition } from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(math.subtract(10, 3)); // 7


// Optional Chaining and Nullish Coalescing(Ikhtiyari Silsila aur Nullish Milap)
// Definition (EN): Optional chaining(?.) allows safe access to nested properties, and nullish coalescing(??) provides default values for null / undefined.

// Definition (UR): Optional chaining(?.) nested properties tak safe access ki ijazat deta hai, aur nullish coalescing(??) null / undefined ke liye default values faraham karta hai.

const user = {
    profile: {
        name: "John",
        address: {
            city: "New York"
        }
    }
};

// Optional chaining (?.)
console.log(user?.profile?.name); // "John"
console.log(user?.profile?.age?.value); // undefined (koi error nahi)
console.log(user?.nonExistent?.property); // undefined

// Optional chaining with function calls
const obj = {
    method: () => "Hello"
};
console.log(obj.method?.()); // "Hello"
console.log(obj.nonExistentMethod?.()); // undefined

// Nullish coalescing (??)
const meriAge2 = user?.profile?.age ?? 25; // 25 (sirf null/undefined ke liye)
console.log(meriAge2);

// vs logical OR (||) jo falsy values ko consider karta hai
const count = 0;
console.log(count || 10); // 10 (0 falsy hai)
console.log(count ?? 10); // 0 (0 null/undefined nahi hai)

const emptyString = "";
console.log(emptyString || "default"); // "default"
console.log(emptyString ?? "default"); // ""

// Combined usage
const city = user?.profile?.address?.city ?? "Unknown";
console.log(city); // "New York"

// Symbols and Iterators(Alamaat aur Iterators)
// Definition (EN): Symbols are unique and immutable primitive values, often used as object property keys.Iterators are objects that define a sequence and return value upon completion.

// Definition (UR): Symbols unique aur immutable primitive values hain, jo aksar object property keys ke tor par istemal hote hain.Iterators woh objects hain jo kisi sequence ko define karte hain aur completion par value return karte hain.

// Symbols - unique aur immutable
const sym1 = Symbol("key");
const sym2 = Symbol("key");
console.log(sym1 === sym2); // false

// Global symbol registry
const globalSym = Symbol.for("globalKey");
const sameGlobalSym = Symbol.for("globalKey");
console.log(globalSym === sameGlobalSym); // true

// Using symbols as object keys
const obj2 = {
    [sym1]: "value1",
    regularKey: "value2"
};
console.log(obj2[sym1]); // "value1"

// Iterators and Generators
const iterableObject = {
    values: [1, 2, 3],
    [Symbol.iterator]: function* () {
        for (let value of this.values) {
            yield value;
        }
    }
};

for (let value of iterableObject) {
    console.log(value); // 1, 2, 3
}

// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: undefined, done: true}

// Infinite generator
function* infiniteNumbers() {
    let num = 0;
    while (true) {
        yield num++;
    }
}