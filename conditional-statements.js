// Control Flow (Igra ka Rukh)
// Conditional Statements (Sharati Farmaatein)

// ----------------------------
// Statement: if-else
// Definition (EN): Conditional statements control the flow of execution based on specified conditions.
// Definition (UR): Sharati farmaatein igra ke rukh ko mukhtalif sharton ki buniyaad par control karti hain.
// Example:
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!"); // Output: It's hot!
} else if (temperature > 20) {
    console.log("It's warm!"); // Output: It's warm!
} else {
    console.log("It's cool!"); // Output: It's cool!
}

// ----------------------------
// Statement: Multiple conditions
// Definition (EN): Evaluates multiple conditions using logical operators.
// Definition (UR): Logical operators ka istemal kar ke mukhtalif sharton ka jaiza leta hai.
// Example:
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive"); // Output: You can drive
} else {
    console.log("You cannot drive"); // Output: You cannot drive
}

// ----------------------------
// Statement: switch
// Definition (EN): The switch statement evaluates an expression and executes code based on matching cases.
// Definition (UR): Switch statement ek expression ki parakh karta hai aur matching cases ki buniyaad par code execute karta hai.
// Example:
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of week"); // Output: Start of week
        break; // Fall-through ko rokta hai
    case "Friday":
        console.log("Weekend is near"); // Output: Weekend is near
        break;
    case "Saturday":
    case "Sunday": // Multiple cases
        console.log("Weekend!"); // Output: Weekend!
        break;
    default:
        console.log("Regular day"); // Output: Regular day
}

// ----------------------------
// Statement: Without break (fall-through)
// Definition (EN): Demonstrates fall-through behavior in switch statements.
// Definition (UR): Switch statements mein fall-through ka amal dikhata hai.
// Example:
let number = 2;

switch (number) {
    case 1:
        console.log("One"); // Output: One (if number is 1)
    case 2:
        console.log("Two"); // Output: Two (if number is 2)
    case 3:
        console.log("Three"); // Output: Three (if number is 2 or 3)
        break;
}

// ----------------------------