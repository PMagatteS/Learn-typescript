// Generics allow creating type variables, wich can be used to create objects that don' need to define the types that they use

// Generics in functions

// Classic functions

function genericAdd<T extends number>(data1:T, data2:T){

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

// Arrow Functions
const genericArray = <T, U> (data1:T, data2:T) :(T|U)[] => {
    return[data1, data2]
}
