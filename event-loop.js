// Event Loop and Microtasks(Event Loop aur Chotey Kaam)
// Definition (EN): The event loop is JavaScript's concurrency model that handles asynchronous operations. Microtasks (Promises) have higher priority than macrotasks (setTimeout).

// Definition (UR): Event loop JavaScript ka concurrency model hai jo asynchronous operations handle karta hai.Microtasks(Promises) ki macrotasks(setTimeout) se zyada priority hoti hai.

console.log("Start"); // 1 - Synchronous

setTimeout(() => {
    console.log("Timeout"); // 4 - Macrotask
}, 0);

Promise.resolve().then(() => {
    console.log("Promise"); // 3 - Microtask
});

console.log("End"); // 2 - Synchronous

// Output order: Start, End, Promise, Timeout

// More complex example
console.log("Script start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
    })
    .then(() => {
        console.log("Promise 2");
    });

console.log("Script end");

// Output: Script start, Script end, Promise 1, Promise 2, setTimeout