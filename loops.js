// Loops(Chakkar)

// for Loop
// English Definition: Loops execute a block of code multiple times until a specified condition is met.

// Urdu Definition: Chakkar code ke ek block ko multiple dafa tab tak execute karte hain jab tak koi muqarrara shart puri na ho jaye.

// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Multiple variables
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}

// Infinite loop (bacho!)
// for (;;) {
//     console.log("This will run forever");
// }


// while Loop 
// English Definition: The while loop executes as long as the specified condition evaluates to true.

// Urdu Definition: While loop tab tak execute hota hai jab tak muqarrara shart true evaluate hoti hai.

let count = 0;
while (count < 3) {
    console.log(count); // 0, 1, 2
    count++;
}

// Using while for input validation
// let userInput;
// while (!userInput) {
//     // Ye aam tor par user input leta hai
//     userInput = "some value"; // User input ka simulation
// }

// do -while Loop
// English Definition: The do -while loop executes the code block once before checking the condition.

// Urdu Definition: Do -while loop code block ko shart check karne se pehle ek dafa execute karta hai.

let num = 0;
do {
    console.log(num); // 0 (kam az kam ek dafa execute hota hai)
    num++;
} while (num < 0);

// for...of Loop
// English Definition: The for...of loop iterates over iterable objects like arrays, strings, etc.

// Urdu Definition: For...of loop iterable objects(jaise arrays, strings, waghera) par iterate karta hai.

let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit); // "apple", "banana", "orange"
}

// Strings ke saath
let text = "Hello";
for (let char of text) {
    console.log(char); // "H", "e", "l", "l", "o"
}

// for...in Loop
// English Definition: The for...in loop iterates over the enumerable properties of an object.

// Urdu Definition: For...in loop kisi object ki enumerable properties par iterate karta hai.

let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key, person[key]); // "name John", "age 30"
}

// Arrays ke saath (recommended nahi)
let numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(index, numbers[index]); // "0 10", "1 20", "2 30"
}