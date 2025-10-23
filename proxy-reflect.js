// Proxy and Reflect(Proxy aur Reflect)
// English Definition: Proxy objects enable you to create custom behavior for fundamental operations.Reflect is a built -in object that provides methods for interceptable JavaScript operations.

// Urdu Definition: Proxy objects aapko fundamental operations ke liye custom behavior create karne ka moqa dete hain.Reflect ek built -in object hai jo interceptable JavaScript operations ke liye tareeqe faraham karta hai.

// Proxy - fundamental operations ke liye custom behavior
const target = {
    message: "hello",
    number: 42
};

const handler = {
    get: function (obj, prop) {
        if (prop in obj) {
            return obj[prop];
        }
        return `Property ${prop} doesn't exist`;
    },
    set: function (obj, prop, value) {
        if (prop === 'age' && typeof value !== 'number') {
            throw new Error("Age must be a number");
        }
        obj[prop] = value;
        return true; // Kamiyabi ki alamat
    },
    has: function (obj, prop) {
        return prop in obj;
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // "hello"
console.log(proxy.unknown); // "Property unknown doesn't exist"
proxy.age = 30; // Kaam karta hai
// proxy.age = "thirty"; // Error: Age must be a number

// Reflect - built-in object jo interceptable operations ke liye tareeqe faraham karta hai
const obj = { x: 1, y: 2 };
console.log(Reflect.get(obj, 'x')); // 1
Reflect.set(obj, 'z', 3);
console.log(obj.z); // 3
console.log(Reflect.has(obj, 'x')); // true

// Using Proxy and Reflect together
const loggingHandler = {
    get: function (target, property, receiver) {
        console.log(`Getting property: ${property}`);
        return Reflect.get(target, property, receiver);
    },
    set: function (target, property, value, receiver) {
        console.log(`Setting property: ${property} to ${value}`);
        return Reflect.set(target, property, value, receiver);
    }
};

const loggedObj = new Proxy({}, loggingHandler);
loggedObj.name = "John"; // "Setting property: name to John"
console.log(loggedObj.name); // "Getting property: name", "John"

// Map and Set(Map aur Set)
// English Definition: Map is a collection of key - value pairs where keys can be of any type.Set is a collection of unique values.

// Urdu Definition: Map key - value pairs ka collection hai jahan keys kisi bhi type ki ho sakti hain.Set unique values ka collection hai.