// Map and Set(Map aur Set)
// English Definition: Map is a collection of key - value pairs where keys can be of any type.Set is a collection of unique values.

// Urdu Definition: Map key - value pairs ka collection hai jahan keys kisi bhi type ki ho sakti hain.Set unique values ka collection hai.

// Map - key-value pairs jahan keys kisi bhi type ki ho sakti hain
const map = new Map();
map.set('name', 'John');
map.set(1, 'number one');
map.set({}, 'object key');
map.set(() => { }, 'function key');

console.log(map.get('name')); // "John"
console.log(map.size); // 4
console.log(map.has(1)); // true

// Iterating over Map
for (let [key, value] of map) {
    console.log(key, value);
}

// Set - unique values ka collection
const set = new Set([1, 2, 3, 3, 4, 4]);
set.add(5);
set.add(1); // Duplicate add nahi karega

console.log(set.size); // 5
console.log(set.has(3)); // true

// Set operations
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Union
const union = new Set([...setA, ...setB]);
console.log([...union]); // [1, 2, 3, 4]

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log([...intersection]); // [2, 3]

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log([...difference]); // [1]

// WeakMap and WeakSet (garbage collection ke liye)
const weakMap = new WeakMap();
const weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, 'private data');
weakSet.add(obj2);

// obj1 aur obj2 garbage collected ho sakte hain agar koi doosra reference na ho