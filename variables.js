// Variable Declarations(Variable elaan)

// Definition (EN): var declares a function-scoped or globally - scoped variable, optionally initializing it to a value.Variables declared with var are hoisted to the top of their scope.

// Definition (UR): var function-scoped ya globally - scoped variable banata hai, jise option tor par value di ja sakti hai.var se banaye gaye variables apne scope ke top par hoisted hote hain.

// **** var example **** //

// var nickName = undefined; // hoisting ki wajah se aise samjha ja sakta hai
console.log(nickName); // undefined (hoisted lekin initialized nahi)
var nickName = "John";
console.log(nickName); // "John"

// Function scoping ki misaal
function testVar() {
    function innerFunction() {
        if (true) {
            var x = 10;
        }
        console.log(x); // 10 (block se bahar accessible)
    }
    innerFunction();
}
testVar();

// **** let example **** //

// let(Changeable Variable)
// Definition (EN): let declares a block-scoped local variable, optionally initializing it to a value.let variables are not hoisted in the same way as var.

// Definition (UR): let block-scoped local variable banata hai, jise option tor par value di ja sakti hai.let variables var ki tarah hoisted nahi hote.

console.log(age); // ReferenceError: 'age' ko initialization se pehle access nahi kar sakte
let age = 25;
console.log(age); // 25

// Block scoping ki misaal
function testLet() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    console.log(y); // ReferenceError: 'y' defined nahi hai
}
testLet();

// **** const example **** //

// const (Constant)
// Definition (EN): const declares a block-scoped constant that cannot be reassigned.Must be initialized during declaration.The assignment is immutable, but the value itself may be mutable.

// Definition (UR): const block-scoped constant banata hai jise dobara assign nahi kiya ja sakta.Declaration ke dauraan ise initialize karna zaroori hai.Assignment immutable hai, lekin value khud mutable ho sakti hai.

const PI = 3.14159;
console.log(PI); // 3.14159
// PI = 3.14; // TypeError: Constant variable ko assign nahi kar sakte

// const objects ke saath - reference constant hai, content nahi
const person = { name: "John" };
person.name = "Jane"; // Ye allowed hai
person = { name: "Jane" }; // Ye allowed nahi hai