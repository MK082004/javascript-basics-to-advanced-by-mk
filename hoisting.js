// Hoisting(Uthan)

// Definition (EN): Hoisting is JavaScript's behavior of moving declarations to the top of their containing scope during the compilation phase. However, only declarations are hoisted, not initializations.

// Definition (UR): Hoisting JavaScript ka woh behavior hai jo compilation phase mein declarations ko unke containing scope ke top par le jata hai.Lekin sirf declarations hoisted hote hain, initializations nahi.

var hoisting
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// Ye is tarah interpret hota hai:
var a;
console.log(a); // undefined
a = 5;
console.log(a); // 5

// let/const hoisting (Temporal Dead Zone)
console.log(b); // ReferenceError: 'b' ko initialization se pehle access nahi kar sakte
let b = 10;

// Function hoisting
sayHello(); // "Hello!" (kaam karta hai kyunki function declaration hoisted hai)

function sayHello() {
    console.log("Hello!");
}