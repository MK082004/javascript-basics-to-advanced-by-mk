// Data Types(Data ki Qismein)

// Definition (EN): An attribute associated with a piece of data that tells a computer system how to interpret its value.In programming, a data type defines a collection of data values, the possible values they can take, and the operations that can be performed on them.

// Definition (UR): Data type kisi bhi data (means information) ke saath ek aisi khusosiyat hoti hai jo computer system ko batati hai ke uski value ko kis tarah samajhna hai.Programming mein, data type data values ke ek group ki wazahat karta hai, ke woh kaun si qadrain le sakte hain, aur un par kaun se operations kiye ja sakte hain.

// Mutable(Changable)
// Definition (EN): A mutable data type is an object whose internal state or content can be changed, or "mutated," after it is created.In JavaScript, objects and arrays are mutable by default.

// Definition (UR): Mutable data types woh objects hote hain, jinki andaruni halat ya mawad ko banane ke baad badla ja sakta hai.JavaScript mein, objects aur arrays(mutable) hote hain.

// Immutable(Unchangable)
// Definition (EN): An immutable data type is an object whose value or state cannot be changed once it is created.Any operation that appears to modify an immutable value actually creates a completely new object with the new value, while the original remains unchanged in memory.

// Definition (UR): Immutable data types woh objects hote hain jinki value ya halat ek baar banne ke baad tabdeel nahi ki ja sakti.Koi bhi operation jo kisi immutable value ko badalta hua lagta hai, woh asal mein nai value ke saath ek naya object banata hai, jabke original memory mein waisa hi rehta hai.
// Primitive Types(Buniyadi Data)

// Definition (EN): Primitive data types are immutable values that are directly stored in memory.There are 7 primitive types in JavaScript.

// Definition (UR): Primitive data types woh immutable values hain jo seedhe memory mein store hote hain.JavaScript mein 7 primitive types hain.

// String - textual data ko represent karta hai
let message = "Hello World";
console.log(typeof message); // "string"

// Number - integer aur floating-point numbers dono ko represent karta hai
let count = 42;
let price = 19.99;
let negative = -5;
console.log(typeof count); // "number"

// Boolean - logical entity ko true/false values mein represent karta hai
let isActive = true;
let isCompleted = false;
console.log(typeof isActive); // "boolean"

// Undefined - variable declared lekin assigned nahi
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// Null - kisi object value ke intentional absence ko represent karta hai
let empty = null;
console.log(typeof empty); // "object" (JavaScript mein historical bug)

// Symbol (ES6) - unique aur immutable primitive value
let sym = Symbol("unique");
let sym2 = Symbol("unique");
console.log(typeof sym); // "symbol"
console.log(sym === sym2); // false

// BigInt (ES2020) - arbitrary precision ke integers ko represent karta hai
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"


// Non Primitives Types(Reference Types) - (Hawalaati Qismein)
// Definition (EN): Reference types are objects that are stored by reference.When copied, they reference the same underlying object.

// Definition (UR): Reference types woh objects hain jo reference ke zariye store hote hain.Jab copy kiye jate hain, toh woh same underlying object ko reference karte hain.

// Object - key-value pairs ka collection
let person = {
    name: "John",
    age: 30
};
console.log(typeof person); // "object"

// Array - values ki ordered list
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object"

// Function - callable object
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function"

// Reference behavior ki misaal
let arr1 = [1, 2, 3];
let arr2 = arr1; // Dono same array ko reference karte hain
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (original array modify ho gayi)