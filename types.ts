// Defining Types

let str: string;
str = "String value";
let num: number;
num = 23;
let bool: boolean;
bool = true
let arr: (number|string|boolean)[] = [];
arr = [2, "An array with a string annd a number"]
let obj: {name: string, age: number};
obj = {name: "john", age: 48};



// Types by Inference

let str2: "String value";
let num2: 23;
let bool2: true;
let arr2 = [2, "An array with a string annd a number"];
let obj2 = {name: "jonh", age: 48};





// Any type

let anything: any
anything = 34;
anything = "A string";
anything = false;
anything = [12, "Another string"];
anything= {name: "john", age: 34}

// Optional keys or value
// We can have optional keys objects by following a key with a question mark
const optionalKeys :{
    name: string,
    age?: number,
    isHuman?: boolean
}={
    name:"Max"
}