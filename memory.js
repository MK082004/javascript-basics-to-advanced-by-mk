// Stack Memory(Stack Memory)

// Definition (EN): Stack memory is a structured, fast - access memory region where temporary data, such as local variables and function call information, is stored.It operates on a Last - In, First - Out(LIFO) basis, meaning the last item added is the first one to be removed.

// Definition (UR): Stack memory ek tarteeb shuda, tezi se access hone wala memory hissa hai jahan temporary data, jaise ke local variables aur function call ki maloomat, store hoti hai.Yeh LIFO(Last - In, First - Out) tareeqe par kaam karta hai, matlab jo aakhri item add kiya jata hai, woh sab se pehle remove hota hai.

// Heap Memory(Heap Memory)
// Definition (EN): Heap memory is a less structured, larger pool of memory used for dynamic memory allocation.Unlike the stack, memory allocation in the heap is more flexible, allowing programs to allocate and deallocate memory blocks of various sizes during runtime.

// Definition (UR): Heap memory kam tarteeb shuda, memory ka ek bara pool hai jo dynamic memory allocation ke liye istemal hota hai.Stack ke bar - aks, heap mein memory allocation zyada flexible hoti hai, jo programs ko runtime ke dauran mukhtalif size ke memory blocks ko allocate aur deallocate karne ki ijazat deti hai.

// Stack aur Heap mein buniyadi farq (Key differences between Stack and Heap)

// Allocation / Deallocation
// STACK: Automatic — local variables aur function call frames scope khatam hone par compiler/runtime khud allocate aur free kar deta hai.
// HEAP: Dynamic / Manual — runtime par memory allocate ki jati hai (e.g., new/malloc). Free karna programmer ya garbage collector ka kaam hota hai.

// Urdu:
// STACK: Khud-ba-khud — local variables aur function frames scope se bahar jaane par hata diye jate hain.
// HEAP: Dynamic / Manual — runtime par allocate hota hai; free karna programmer ya GC ki zimmedari hoti hai.

// Speed
// STACK: Faster — allocation/deallocation simple pointer adjustment hai; cache-friendly.
// HEAP: Slower — allocation complex ho sakti hai, fragmentation aur bookkeeping required hoti hai.

// Size
// STACK: Limited / Fixed — per-thread stack size hota hai, zyada bada nahi hota.
// HEAP: Flexible / Larger — zaroorat ke mutabiq grow kar sakta hai (system limits ke sath).

// Access / Scope
// STACK: Local — variables sirf usi function/frame se directly accessible hote hain jahan banaye gaye.
// HEAP: Global (by reference) — heap objects ko application ke kisi bhi hisse se reference ke zariye access kiya ja sakta hai.

// Usage
// STACK: Primitive values, function arguments, return addresses, aur fixed-size local data store karne ke liye.
// HEAP: Objects, arrays, aur runtime-size data structures jinka lifetime function scope se aage barhta ho, unke liye.

// Common Problems / Errors
// STACK: Stack overflow — bohot zyada recursion ya bohot bada local allocation stack size cross kar de.
// HEAP: Memory leak — references reh jane ki wajah se memory free na ho; fragmentation; in manual-management languages use-after-free ya double-free issues.