// We can create custom types (Called alias) with the keyword 'type'
// We can create aliases for primitives(string, number...) and complex types(objects, arrays)

type userName = string;
type phoneNumber = number;
type isGoated = boolean;
type primeNumbers = number[];

type Id = {
    name: string,
    age: number,
    isLegal: boolean,
    favoriteLanguages: string[]
};

const user: Id = {
    name: 'john',
    age: 19,
    isLegal: true,
    favoriteLanguages: ["Javascript", "Php", "Python"]
}

console.log(`Hello user ${user.name}`);
