// Classes in typescript are similar to classes in js with some additional features

class UserData{
    name: string;
    age: number;
    // Public keyword: the public member can be access outside of the class, by default properties are public
    public hobbies: string[];
    // Private keyword : the private member cannot be accessed outside of the class
    private password: string = "123456";
    private _friends: string[] = []
    // Static keyword: the static member can be used without instantiating the class
    static greeting: string = "Hello";
    // Protected keyword
    constructor(name: string = "user", age: number = 18, hobbies: string[] = ["Sky", "Dive"], protected token: number = 12345678){
        this.name= name;
        this.hobbies= hobbies;
        this.age= age;
    }    
    // Getter: If get exists but no set, the property is automatically readonly, the getter must return something
    public get friend(){
        return this._friends
    }
    
    // Setter: If the type of the setter parameter is not specified, it is inferred from the return type of the getter, we can set a new vallue to the private member
    public set friend(newFriends: string[]){
        if(newFriends.length < 1){
            return
        }
        this._friends = newFriends
    }
}

class  AdvencedUserData extends UserData{
    log(){
        // Private member are not accessible via inheritance
        // console.log(this.password);
        // Property 'password' is private and only accessible within class 'UserData'

        console.log(this.age, this.hobbies, this.name);

        // Accessing to protected member
        console.log(this.token);       
    }
}

const user = new UserData("Max", 67, ["Golf", "Bowling"]);
// Public member
console.log(user.hobbies);

// Private member
// console.log(user.password);
// member 'password' is private and only accessible within class 'UserData'

// Static member
console.log(UserData.greeting)

// Getter
console.log(user.friend);

// Setter
user.friend = ["John", "Max"]


const user2 = new AdvencedUserData()

user2.log()
// Can access to static member
console.log(AdvencedUserData.greeting);

// Abstract keyword: We cannot crate an instance of an abstract class
abstract class Person{
    name:string
    age:number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

// Cannot create an instance of an abstract class
// const john = new Person

class John extends Person{
    ethnicity: string|undefined;
    constructor(name:string, age:number, ethnicity?: string|undefined){
        super(name, age)
        if(ethnicity){
            this.ethnicity = ethnicity
        }

        
    }

    tellAge(){
        console.log(this.age);        
    }
}

const john = new John("John", 28)
john.tellAge()


export{}