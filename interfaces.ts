// Interfaces are similar to alias except they can only be apply to object type
// We can use optional keys and readonly keyword as well

interface PersonId {
    name: string,
    readonly age: number, 
    ethnicity?: string,
}

const max: PersonId = {
    name: "Max",
    age: 13,
    ethnicity: "Black", 
}

console.log(max.name);

// Interfaces can also inherit from other interfaces

interface AdvencedPersonId extends PersonId{
    favoriteLanguages: string[]
}

const max2:AdvencedPersonId = {
    name: "Max",
    age: 13,
    favoriteLanguages: ["Javascript", "Php", "Python"]
}

// Funtion interfaces

interface Legal{
    (user: AdvencedPersonId):boolean
}

const isLegal:Legal = (user) => {
    if(user.age >= 18){
        return true
    }
    return false
}

console.log(isLegal(max2));

// Arrays interfaces

// Arrray interfaces must inherit from Array to be able to use array methods

// Basic array

interface BasicList extends Array<any>{
    [index: number]: any
}

const anything : BasicList = [123, "456", true, ["another"], {array: "and an object"}]

// Number array(can be can be any other type or mixed type)
interface NumberList extends Array<number>{
    [index: number]: number
}

let primeNumber: NumberList;
primeNumber = [ 2, 3, 5, 7, 11]

// Associative array

interface AssociativeArray{
    [index: string]: any
    //We can add here other rules as well
    madatoryKey: number
}
// Here we can have as many key as we want
const associativeArray : AssociativeArray = {
    madatoryKey:0,
    firstKey: 1,
    secondKey: 2
};
associativeArray["thirdKey"] = 3

export{}