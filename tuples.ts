// A tuple is a typed array with a pre-defined length and types for each index.
let tuple: [number, string, boolean];
tuple = [12, "A string", false]

// We can add a new value of the defined types with the push method
tuple.push(12)

// To prevent any change on tuples we can define it as readonly

let tuple2: readonly [number, string, boolean] = [5, 'A string', true];
// tuple2.push(34) Property 'push' does not exist on type 'readonly [number, string, boolean]'

// Just like an array we can destructure tuples
let tuple3: [string, string] = ["Hello ", "World"];
let [hello, world] = tuple3;
console.log(hello, world);