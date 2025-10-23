// Type Coercion(Type Badalna)
// Definition (EN): Type coercion is the automatic or implicit conversion of values from one data type to another.

// Definition (UR): Type coercion values ka automatic ya implicit conversion hai ek data type se doosre data type mein.

// Implicit Coercion - automatic conversion
console.log(5 + "5"); // "55" (number se string)
console.log("5" - 2); // 3 (string se number)
console.log(true + 1); // 2 (boolean se number)
console.log("5" == 5); // true (loose equality coercion ke saath)

// Explicit Coercion - manual conversion
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true

// Falsy values (false mein convert hote hain): false, 0, "", null, undefined, NaN
// Truthy values: baaki sab kuch