// Prototypes and Inheritance(Prototypes aur Wirasat)
// English Definition: JavaScript uses prototypal inheritance where objects can inherit properties and methods from other objects.

// Urdu Definition: JavaScript prototypal inheritance istemal karti hai jahan objects doosre objects ki properties aur methods inherit kar sakte hain.

// Constructor Functions

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function () {
    return `Hello, I'm ${this.name}`;
};

// Creating instances
const john = new Person("John", 30);
const jane = new Person("Jane", 25);

console.log(john.greet()); // "Hello, I'm John"
console.log(jane.greet()); // "Hello, I'm Jane"

// Prototype chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Prototypal Inheritance
function Employee(name, age, jobTitle) {
    // Call parent constructor
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up prototype chain
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add method to Employee prototype
Employee.prototype.work = function () {
    return `${this.name} is working as ${this.jobTitle}`;
};

const alice = new Employee("Alice", 25, "Developer");
console.log(alice.greet()); // "Hello, I'm Alice" (inherited)
console.log(alice.work());  // "Alice is working as Developer"

// ES6 Classes(ES6 Classes)
// English Definition: Classes in ES6 are syntactic sugar over JavaScript's existing prototype-based inheritance, providing a cleaner syntax.

// Urdu Definition: ES6 mein classes JavaScript ki existing prototype - based inheritance par syntactic sugar hain, jo cleaner syntax faraham karti hain.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance method
    greet() {
        return `Hello, I'm ${this.name}`;
    }

    // Static method (class par call hota hai, instances par nahi)
    static compareAges(person1, person2) {
        return person1.age - person2.age;
    }

    // Getter
    get description() {
        return `${this.name} is ${this.age} years old`;
    }

    // Setter
    set nickname(value) {
        this._nickname = value;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call parent constructor
        this.jobTitle = jobTitle;
    }

    work() {
        return `${this.name} is working as ${this.jobTitle}`;
    }

    // Override parent method
    greet() {
        return `${super.greet()} and I'm a ${this.jobTitle}`;
    }
}

const bob = new Employee("Bob", 28, "Designer");
console.log(bob.greet()); // "Hello, I'm Bob and I'm a Designer"
console.log(bob.work());  // "Bob is working as Designer"

// Static method call
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
console.log(Person.compareAges(person1, person2)); // 5



// This Keyword(This ka lafz)
// English Definition: The this keyword refers to the object that is executing the current function. Its value depends on how the function is called.

// Urdu Definition: this keyword us object ki taraf ishara karta hai jo current function execute kar raha hai.Iski value function ke call hone ke tareeqe par munhasir hai.

// Global context
console.log(this); // Browsers mein Window, Node.js mein global

// Object method
const obj = {
    name: "My Object",
    getName: function () {
        return this.name;
    }
};
console.log(obj.getName()); // "My Object"

// Function context (invocation par munhasir)
function showThis() {
    console.log(this);
}

showThis(); // Window (non-strict mode mein)
// Strict mode mein: undefined

// Constructor context
function Car(brand) {
    this.brand = brand;
}
const myCar = new Car("Toyota");
console.log(myCar.brand); // "Toyota"

// Arrow functions (surrounding scope se this inherit karte hain)
const arrowObj = {
    value: 42,
    getValue: function () {
        const inner = () => {
            return this.value; // getValue se inherit karta hai
        };
        return inner();
    },
    // Arrow function as method (recommended nahi)
    badGetValue: () => {
        return this.value; // Global this ki taraf ishara karta hai
    }
};
console.log(arrowObj.getValue()); // 42
console.log(arrowObj.badGetValue()); // undefined

// Call, Apply, Bind
// English Definition: These methods allow you to explicitly set the value of this when calling a function.

// Urdu Definition: Ye tareeqe function call karte waqt this ki value explicitly set karne ki ijazat dete hain.

const person3 = { name: "Alice" };
const person4 = { name: "Bob" };

function introduce(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
}

// call - specified this aur arguments ke saath function ko foran invoke karta hai
console.log(introduce.call(person3, "Hello", "!")); // "Hello, I'm Alice!"

// apply - call ki tarah lekin arguments ki array leta hai
console.log(introduce.apply(person4, ["Hi", "!!"])); // "Hi, I'm Bob!!"

// bind - bound this ke saath naya function return karta hai
const boundIntroduce = introduce.bind(person3, "Hey");
console.log(boundIntroduce("...")); // "Hey, I'm Alice..."

// Array-like objects ke saath amali misaal
function printArguments() {
    // arguments array-like hai lekin array nahi
    const args = Array.prototype.slice.call(arguments);
    console.log(args);
}
printArguments(1, 2, 3); // [1, 2, 3]