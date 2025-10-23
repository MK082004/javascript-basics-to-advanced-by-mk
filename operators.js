// Arithmetic & Comparison Operators
// Format for each operator:
// Operator: <symbol>
// Definition (EN): <short, precise Definition (EN)>
// Definition (UR): <short, precise Definition (UR)>
// Example: <code showing usage> // Output: <expected output>

// ----------------------------
// Operator: +
// Definition (EN): Adds two numeric operands and returns their sum.
// Definition (UR): Do numeric operands ko jama kar ke unka majmooa wapas karta hai.
// Example:
let a = 10, b = 3;
console.log(a + b); // Output: 13

// ----------------------------
// Operator: -
// Definition (EN): Subtracts the second operand from the first and returns the difference.
// Definition (UR): Pehle operand me se doosra operand ghata kar farq wapas karta hai.
// Example:
console.log(a - b); // Output: 7

// ----------------------------
// Operator: *
// Definition (EN): Multiplies two operands and returns the product.
// Definition (UR): Do operands ko zarb de kar hasil wapas karta hai.
// Example:
console.log(a * b); // Output: 30

// ----------------------------
// Operator: /
// Definition (EN): Divides the first operand by the second and returns the quotient (may be fractional).
// Definition (UR): Pehle operand ko doosre se taqseem kar ke nateeja (quotient) wapas karta hai.
// Example:
console.log(a / b); // Output: 3.3333333333333335

// ----------------------------
// Operator: %
// Definition (EN): Returns the remainder after integer division of the first operand by the second.
// Definition (UR): Pehle operand ko doosre se taqseem karne par baqi (remainder) wapas karta hai.
// Example:
console.log(a % b); // Output: 1

// ----------------------------
// Operator: **
// Definition (EN): Raises the first operand to the power of the second (exponentiation).
// Definition (UR): Pehle operand ko doosre operand ki power tak uthata hai.
// Example:
console.log(a ** b); // Output: 1000

// ----------------------------
// Increment / Decrement
// Definition (EN): ++ and -- change a variable's value by 1. Prefix form updates then returns; postfix returns then updates.
// Definition (UR): ++ aur -- ek variable ko 1 se barhate/ghatate hain. Prefix pehle update karta hai phir value deta hai; postfix pehle value deta hai phir update karta hai.
// Example:
let count = 5;
console.log(count++); // Output: 5  (postfix returns old value, then count becomes 6)
console.log(++count); // Output: 7  (prefix increments first, then returns new value)

// ----------------------------
// Strict Equality (===) / Inequality (!==)
// Definition (EN): Compares both value and type. Returns true only if both match exactly.
// Definition (UR): Value aur type dono ka sakht muqabla karta hai. Sirf tabhi true jab dono bilkul miltay hon.
// Example:
console.log(5 === "5"); // Output: false
console.log(5 === 5);   // Output: true

// ----------------------------
// Loose Equality (==) / Inequality (!=)
// Definition (EN): Compares values after type coercion; types may be converted before comparison.
// Definition (UR): Pehle types ko convert karke (type coercion) values ka muqabla karta hai.
// Example:
console.log(5 == "5"); // Output: true
console.log(true == 1); // Output: true

// ----------------------------
// Relational Operators: >, <, >=, <=
// Definition (EN): Compare two values and return a boolean indicating relative ordering.
// Definition (UR): Do values ko muqabla kar ke relative ordering ka boolean wapas karte hain.
// Examples:
console.log(5 > 3);   // Output: true
console.log(5 < 3);   // Output: false
console.log(5 >= 5);  // Output: true
console.log(5 <= 3);  // Output: false

// ----------------------------
// Operator: && (Logical AND)
// Definition (EN): Returns true if both operands are truthy. Uses short-circuit evaluation — if the left operand is falsy, the right operand is not evaluated.
// Definition (UR): Dono operands truthy hon to true wapas karta hai. Short-circuit hota hai — agar pehla falsy ho to doosra evaluate nahi hota.
// Example:
let x = 5, y = 10;
console.log(x > 0 && y > 0);  // Output: true
console.log(x > 10 && y > 5); // Output: false

// Short-circuit example (function won't be called when left is falsy)
function willNotRun() { console.log("called"); return true; }
console.log(false && willNotRun()); // Output: false  (willNotRun not called)

// ----------------------------
// Operator: || (Logical OR)
// Definition (EN): Returns the first truthy operand; if the left operand is truthy the right operand is not evaluated (short-circuit).
// Definition (UR): Pehla truthy operand wapas karta hai; agar pehla truthy ho to doosra evaluate nahi hota (short-circuit).
// Example:
console.log(x > 10 || y > 5); // Output: true
console.log(x > 10 || y < 5); // Output: false

// Short-circuit example (function won't be called when left is truthy)
function alsoWillNotRun() { console.log("called"); return true; }
console.log(true || alsoWillNotRun()); // Output: true (alsoWillNotRun not called)

// ----------------------------
// Operator: ! (Logical NOT)
// Definition (EN): Negates a boolean value; converts its operand to boolean then returns the opposite.
// Definition (UR): Boolean value ka ulta wapas karta hai; pehle operand ko boolean me convert karta hai phir ulta deta hai.
// Example:
console.log(!(x > 10)); // Output: true
console.log(!true);     // Output: false

// ----------------------------
// Operator: ?? (Nullish coalescing)
// Definition (EN): Returns the right operand only if the left operand is null or undefined; otherwise returns the left operand. Useful to distinguish null/undefined from other falsy values (0, "", false).
// Definition (UR): Agar pehla operand null ya undefined ho to doosra wapas karta hai; warna pehla wapas karta hai. 0, "" ya false ko nullish nahi samjhta.
// Example:
console.log(null ?? "default"); // Output: "default"
console.log(undefined ?? "default"); // Output: "default"
console.log(0 ?? "default");    // Output: 0
console.log("" ?? "default");   // Output: ""

// Contrast with || which treats many falsy values as empty:
console.log(0 || "default");    // Output: "default"  (different from ??)

// ----------------------------
// Operator: ?: (Ternary / Conditional)
// Definition (EN): A compact if-else that evaluates a condition and returns one of two expressions: condition ? exprIfTrue : exprIfFalse.
// Definition (UR): If-else ka shorthand; condition true ho to pehla expression wapas karta hai warna doosra.
// Example:
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"

// Nested / chained ternary (use sparingly — can reduce readability)
let score = 85;
let grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" : "F";
console.log(grade); // Output: "B"

// ----------------------------