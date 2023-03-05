// Generics allow creating type variables, wich can be used to create objects that don' need to define the types that they use

// Generics in functions

// Classic functions

// We can constrain a generic to one or multiple types  with the keyword extends
function genericAdd<T extends number|string|(string|number)[]>(data1:T, data2:T){

    if(typeof data1 ==="number" && typeof data2 ==="number"){
        console.log(`The sum of the values is : ${data1+data2}`);
        return data1+data2
    }  
    else if(typeof data1 ==="string" && typeof data2 ==="string"){
        console.log(`The concatenation of the values is : ${data1+data2}`);
        return data1+data2
    } 
    else if(Array.isArray(data1)&& Array.isArray(data2)){
        console.log(`A concatenation of array:${[...data1, ...data2]}`);
        return [...data1, ...data2]
    }
    return [data1, data2]
}

genericAdd(12, 45)
genericAdd('Hello ', 'world')
genericAdd([1,2,3], [4,5,6])


// Arrow Functions
const genericArray = <T, U> (data1:T, data2:T) :(T|U)[] => {
    return[data1, data2]
}

// Aliases generics

type Something<T>= T
type ObjListThing<T>=  T[]


const word : Something<string> = "Word"
const numb : Something<number> = 123
const listOfNums : ObjListThing<number> = [1, 2, 3]
const listOfBools : ObjListThing<boolean> = [true, false]
// Classes generics

class Person<T=string> {
    private _info: T | undefined;
  
    constructor(private name: string) {}
    set info(values:T){
        this._info= values
    }

  }
const john = new Person("John")
john.info = "A anonymous person"
