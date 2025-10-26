// Asynchronous JavaScript(Ghair Mutawasti JavaScript)
// Callbacks
// Definition (EN): A callback is a function passed as an argument to another function, to be executed later.

// Definition (UR): Callback woh function hai jo doosre function ko argument ke tor par pass kiya jata hai, baad mein execute hone ke liye.

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(null, data); // Node.js convention: pehle error
    }, 1000);
}

// Callback hell (dozakh ka piramida)
fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data received:", data);
        // Doosra async operation
        fetchData((error2, data2) => {
            if (error2) {
                console.error("Error:", error2);
            } else {
                console.log("More data:", data2);
            }
        });
    }
});

// Promises(Waday)
// Definition (EN): A Promise represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

// Definition (UR): Promise kisi asynchronous operation ke eventual completion(ya failure) aur uske natijati value ko represent karta hai.

// Creating Promises

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "John Doe" });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

// Consuming Promises
fetchUserData(1)
    .then(user => {
        console.log("User data:", user);
        return user.name; // Aglay then ko pass karta hai
    })
    .then(name => {
        console.log("User name:", name);
        throw new Error("Something went wrong"); // Error ka simulation
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Operation completed"); // Hamesha execute hota hai
    });

// Promise Methods
const promise1 = Promise.resolve("Value 1");
const promise2 = new Promise(resolve => setTimeout(() => resolve("Value 2"), 500));
const promise3 = Promise.reject(new Error("Failed"));

// Promise.all - tamam promises ke resolve hone ka intezar karta hai
Promise.all([promise1, promise2])
    .then(values => console.log("All resolved:", values)) // ["Value 1", "Value 2"]
    .catch(error => console.error("One failed:", error));

// Promise.race - pehla settled promise return karta hai
Promise.race([promise1, promise2])
    .then(value => console.log("First resolved:", value)); // "Value 1"

// Promise.allSettled - tamam promises ke settle hone ka intezar karta hai
Promise.allSettled([promise1, promise2, promise3])
    .then(results => console.log("All settled:", results));

// Promise.any - pehla fulfilled promise return karta hai
Promise.any([promise3, promise2])
    .then(value => console.log("First fulfilled:", value)); // "Value 2"

// Async / Await
// Definition (EN): Async / await is syntactic sugar built on Promises, making asynchronous code look and behave like synchronous code.

// Definition (UR): Async / await Promises par bani syntactic sugar hai, jo asynchronous code ko synchronous code ki tarah dikhne aur amal karne ka mauqa deti hai.

// Async function hamesha promise return karta hai
async function getUserData(userId) {
    try {
        const user = await fetchUserData(userId); // Promise settle hone tak rukta hai
        console.log("User:", user);
        return user;
    } catch (error) {
        console.error("Failed to get user:", error.message);
        throw error; // Error ko dobara throw karta hai
    }
}

// Using async/await
async function processUsers() {
    try {
        const user1 = await getUserData(1);
        const user2 = await getUserData(2); // user1 ka intezar karta hai
        console.log("Both users:", user1, user2);
    } catch (error) {
        console.error("Processing failed:", error);
    }
}

// Parallel execution with Promise.all
async function getMultipleUsers() {
    try {
        const [user1, user2] = await Promise.all([
            getUserData(1),
            getUserData(2) // Dono requests ek saath hoti hain
        ]);
        console.log("Users:", user1, user2);
    } catch (error) {
        console.error("One request failed:", error);
    }
}

// Async function expressions
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
};