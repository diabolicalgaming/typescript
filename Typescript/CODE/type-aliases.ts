/*
    When working with union types, I can create a new type that stores a specific union type using 
    Type Aliases. With this I can event any name that is not built into JS. To use type aliases, I need
    to use the "type" keyword. I.e. I created the type "Combinable".

    I can use type Aliases for any type in JS that I want to store.
*/

// Function without type Alias.

let result1;
function add1(n1: number | string, n2: number | string, resultConversion: 'as-number' | 'as-text'){
    if(typeof n1 === "number" && typeof n2 === "number")
    {
        result1 =  n1 + n2;
    }
    else{
        result1 =  n1.toString() + n2.toString();
    }
    if(resultConversion === 'as-number'){
        return parseFloat(result1); //can also use 'return +result' to return float.
    }
    else{
        return result1.toString();
    }
}


// Function with Type Alias.

type Combinable = number | string
type Conversion = 'as-number' | 'as-text'

let result2;
function add2(n1: Combinable, n2: Combinable, resultConversion: Conversion){
    if(typeof n1 === "number" && typeof n2 === "number")
    {
        result2 =  n1 + n2;
    }
    else{
        result2 =  n1.toString() + n2.toString();
    }
    if(resultConversion === 'as-number'){
        return parseFloat(result2); //can also use 'return +result' to return float.
    }
    else{
        return result2.toString();
    }
}

console.log(add1(1,1, 'as-number'))
console.log(add1('2','2', 'as-text'))
