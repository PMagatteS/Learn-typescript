// Casting types may be useful to access to types properties

let str: unknown;

// Instanciate 'str' don't change the type
str = "A string"

// This doesn't work because unknow doesn't have length property
// console.log(x.length);

console.log((str as string).length);
console.log((<string>str).length);

// Casting type is most used in dom manipulation


// Here the infered types of 'uniqueInput' are 'HTMLInputElement | null'
const uniqueInput = document.querySelector('input')

// So we have access to all input attributes
// We use the question mark here because 'uniqueInput' can be null
console.log(uniqueInput?.value);

// Or if we are sure the that our elelent have the property we want use, we can use an exclamtion point afer the declaration
// const uniqueInput = document.querySelector('input')!
// console.log(uniqueInput.value);

// When it comes to selector like classes or ids the infered types  of 'uniqueInput2' are 'Element | null'
const input1 = document.querySelector('.myInput')
// This give us the error "Property 'value' does not exist on type 'Element' "
// console.log(uniqueInput2?.value);

// We can cast a type to avoid the errors and access to all properties
const input2 = document.querySelector('.myInput') as HTMLInputElement;
// Or
// const input2 = <HTMLInputElement>document.querySelector('.myInput');
console.log(input2.value);

const input3 = document.querySelector('.myInput');
console.log((<HTMLInputElement>input3).value);


export{}