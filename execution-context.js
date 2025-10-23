// Execution Context(Igra ka Mahol)

// Definition (EN): Execution context is an environment where JavaScript code is evaluated and executed.There are three types: global, function, and eval execution contexts.

// Definition (UR): Execution context woh mahol hai jahan JavaScript code ki parakh aur igra hoti hai.Teen qisam ke hote hain: global, function, aur eval execution contexts.

// Global Execution Context - code ke pehle run hone par banta hai
console.log(this); // Browsers mein Window object
console.log(window === this); // Browsers mein true

function example() {
    // Function Execution Context - function call hone par banta hai
    console.log(this); // function ke call par depend karta hai
}