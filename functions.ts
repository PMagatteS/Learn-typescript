// Typescript Functions return type

// Number

const pow = (value:number, exponent: number):number => {
    return value ** exponent;
}
// Default parameters

const pow2 = (value:number, exponent: number = 7):number => {
    return value ** exponent;
}

// String

const capitalize = (word:string):string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Optional parameters

const capitalize2 = (word:string, anotherWord?:string):string => {
    return word.charAt(0).toUpperCase() + word.slice(1) + (' ' + anotherWord||'');
}

// Void type for function that doesnt return value

const helloWorld = ():void => {
    console.log('hello world');     
}

// Arrays

const joinArray = ():(number|string)[] => {
    const foo: string[]= ["Foo", "Bar", "Baz"]
    const nums: number[]= [...Array(7).keys()]
    return [...foo, ...nums]
}

const joinAnyArray = ():any[] => {
    const foo: string[]= ["Foo", "Bar", "Baz"]
    const nums: number[]= [...Array(7).keys()]
    return [...foo, ...nums]
}

// Object

const returnObj = (name:string, age:number):{ name: string; age: number } => {
    return { name, age }
}